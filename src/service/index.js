// service统一出口
import AxiosApi from './axios'
import handler from '@/global/handler'
import { mock } from '@/mock'
import { useUserStore } from '@/store/system/userStore'

const http = new AxiosApi({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  interceptors: {
    // 在发送请求之前做些什么
    requestInterceptor: (config) => {
      // 添加token到请求头
      const token = useUserStore().token
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      // console.log('======请求成功的拦截======')
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('======请求失败的拦截======')
      throw err
    },
    responseInterceptor: (res) => {
      // console.log('======响应成功的拦截======')
      // 自定义返回数据格式
      if (res.data?.code !== 200) {
        handler.codeHandler(res.data?.code, res.data?.msg)
      }
      return res.data?.data
    },
    responseInterceptorCatch: (err) => {
      if (err.config?.mock) return mock.request(err.config)
      handler.codeHandler(err?.response?.status, err.message)
      throw err
    },
  },
})

export default http
