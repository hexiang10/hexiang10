import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'
import hljs from 'highlight.js'

import myComponent from '@/components/index'

export function globalRegister(app) {
  // 全局组件注册
  Object.keys(myComponent).forEach((key) => {
    app.component(key, myComponent[key])
  })
  // 使用markdown编辑器
  VMdPreview.use(githubTheme, {
    Hljs: hljs,
  })
  app.use(VMdPreview)
}
