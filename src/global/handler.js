import urlEnum from '@/enum/urlEnum'
import router from '@/router'
import msgUtil from '@/utils/msgUtil'

export default {
  /**
   * 根据状态码判断执行的操作
   */
  codeHandler(code, msg) {
    switch (code) {
      case 401:
        msgUtil.msgError(msg ?? '你没有权限访问此页面，请先登录')
        setTimeout(() => {
          toLogin()
        }, 1000)
        break
      case 403:
        msgUtil.msgError(msg ?? '登录过期，请重新登录')
        setTimeout(() => {
          toLogin()
        }, 1000)
        break
      case 404:
        msgUtil.msgError(msg ?? '请求失败，请检查网络连接或联系管理员')
        break
      case 500:
        msgUtil.msgError(msg ?? '服务器内部错误，请稍后再试')
        toError(500)
        break
      case 530:
        msgUtil.msgError(msg ?? '账号或密码错误！')
        break
      default:
        msgUtil.msgError(msg ?? '未知错误，请稍后再试')
    }
  },

  warnHandler(app) {
    app.config.warnHandler = (msg) => {
      try {
        // 使用正则表达式优化性能并提高匹配的灵活性
        const ignoreWarnings = [
          /Failed to resolve component: lord-icon/,
          /Third-party cookie will be blocked/,
          /-ms-high-constrast/,
        ]

        // 检查是否需要忽略当前警告
        ignoreWarnings.some((pattern) => pattern.test(msg))

        // 如果警告不应被忽略，则输出到控制台
        // if (!shouldIgnore) {
        //   console.error(msg)
        // }
      } catch (error) {
        // 异常处理：记录错误信息，但不再进一步处理
        // 实际应用中，这里可以改为将错误发送到远程日志系统
        console.error('Error handling warning:', error)
      }
    }
  },
}

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: urlEnum.SYSTEM_LOGIN,
    query: {
      redirect: router.currentRoute.fullPath,
    },
  })
}

/**
 * 状态码页面跳转
 */
const toError = (num) => {
  router.replace({
    path: `/error/${num}`,
    query: {
      redirect: router.currentRoute.fullPath,
    },
  })
}
