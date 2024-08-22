import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/style/tailwindcss.css'
import '@/assets/iconfont' // 引入iconfont

const app = createApp(App)
// 全局过滤器
import { filters } from '@/global/filters.js'
app.config.globalProperties.$filters = filters
// 全局注册
import { globalRegister } from '@/global/register'
app.use(globalRegister)
// 使用路由
import router from './router'
app.use(router)
// 使用pinia + 持久化
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
// 处理特定类型的警告信息打印
import handler from '@/global/handler'
handler.warnHandler(app)
// 启动应用
app.mount('#app')
