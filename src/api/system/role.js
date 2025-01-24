import URL from '@/enum/url'
import http from '@/service'

export default {
  getRoleMenusByRoleId(roleId) {
    return http.get({
      url: URL.SYSTEM_ROLE + roleId + '/menu',
    })
  },
}
