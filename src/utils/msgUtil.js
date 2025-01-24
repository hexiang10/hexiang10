import { ElNotification } from 'element-plus'

export default {
  // 操作成功消息提醒内容
  msgOk(msg) {
    ElMessage({
      showClose: true,
      message: msg || '操作成功！',
      type: 'success',
    })
  },

  // 操作失败消息提醒内容
  msgError(msg) {
    ElMessage({
      showClose: true,
      message: msg || '网络异常，请稍后重试！',
      type: 'error',
    })
  },
  // 操作警告提醒内容
  msgWarn(msg) {
    ElMessage({
      showClose: true,
      message: msg || '操作警告，请谨慎操作！',
      type: 'warning',
    })
  },

  // 操作成功消息提醒内容
  notifySuccess(msg, cb) {
    ElNotification({
      title: '成功',
      message: msg || '操作成功！',
      type: 'success',
      duration: 2000,
      onClose: function () {
        cb && cb()
      },
    })
  },

  // 操作成功消息提醒内容
  notifyOK(title = 'OK', msg = '', cb) {
    ElNotification({
      title: title,
      message: msg,
      type: 'success',
      duration: 2000,
      onClose: function () {
        cb && cb()
      },
    })
  },

  showLoading(msg) {
    return ElLoading.service({
      lock: true,
      text: msg || 'Loading',
      background: 'rgba(0, 0, 0, 0.7)',
    })
  },
}
