import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import path from 'path'
import Pages from 'vite-plugin-pages'
const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 获取`.env`环境配置文件
  const env = loadEnv(mode, process.cwd())
  return {
    // 服务器配置
    server: {
      // host: 'localhost', // 只能本地访问
      host: '0.0.0.0', // 局域网别人也可访问
      // 端口号，默认是 5173
      port: Number(env.VITE_APP_PORT),
      //为开发服务器配置 CORS , 默认启用并允许任何源
      cors: true,
      //是否强制依赖预构建
      force: true,
      // 是否开启 https
      https: false,
      // 服务器代理配置
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_SERVICE_API,
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(new RegExp('^' + env.VITE_APP_BASE_API), ''),
        },
      },
      // 自定义中间件
      middleware: [],
      // 是否开启自动刷新
      hmr: true,
      // 是否开启自动打开浏览器
      open: false,
    },
    resolve: {
      alias: {
        '@': pathSrc,
      },
      // 导入时想要省略的扩展名列表,不建议使用 .vue 影响IDE和类型支持
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    plugins: [
      vue(),
      // 启用响应式语法糖 $ref ...
      ReactivityTransform(),
      AutoImport({
        resolvers: [
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
        dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
        imports: ['vue', 'vue-router', { axios: [['default', 'axios']] }],
        // 指定需要导入的组件所在的文件夹
        // dirs:[],
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep'],
          }),
        ],
        dts: path.resolve(pathSrc, 'components.d.ts'),
      }),
      ElementPlus({
        // options
      }),
      Icons({
        autoInstall: true,
      }),
      Pages({
        dirs: 'src/views', // 需要生成路由的文件目录
        exclude: ['**/components/*.vue'], // 排除在外的目录，即不将所有 components 目录下的 .vue 文件生成路由
      }),
    ],
    optimizeDeps: {
      exclude: ['third-party-cookie-lib'],
      //检测需要预构建的依赖项
      entries: [],
      //默认情况下，不在 node_modules 中的，链接的包不会预构建
      include: ['axios'],
    },
    build: {},
  }
})
