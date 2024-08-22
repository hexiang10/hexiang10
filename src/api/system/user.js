import URL from '@/enum/url'
import http from '@/service'

export default {
  login(account) {
    return http.post({
      url: URL.SYSTEM_LOGIN,
      data: account,
    })
  },
  getUserInfoById(id) {
    return http.get({
      url: URL.SYSTEM_USER + id,
    })
  },
}
