// 枚举一些常用的url

const urlEnum = {
  // 系统管理相关
  SYSTEM_ADMIN_HOME: '/system/admin/home',
  SYSTEM_LOGIN: '/system/login',
  SYSTEM_LOGOUT: '/system/logout',
  SYSTEM_ROLE: '/system/role/',
  SYSTEM_USER: '/system/user/',
  // mock相关
  MOCK_ERROR: '/test/error',
  MOCK_DEFAULT: '/test/helloword',
  MOCK_PICSUMLIST: 'https://picsum.photos/v2/list',
  MOCK_PICSUMLIST_PAGE: 'https://picsum.photos/v2/list?page=2&limit=20',
  // 错误页面
  ERROR_401: '/error/401',
  ERROR_500: '/error/500',
}

export default urlEnum
