import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

/* 路由发生变化修改页面title */
router.beforeEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }

})

export default router
