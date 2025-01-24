import axios from 'axios'

class AxiosApi {
  constructor(config) {
    // 创建axios实例
    this.instance = axios.create(config)
    // 保存基本信息
    this.interceptors = config.interceptors
    // 从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch,
    )
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => config,
      (err) => {
        throw err
      },
    )
    // 响应拦截器
    this.instance.interceptors.response.use(
      (res) => res,
      (err) => {
        throw err
      },
    )
  }

  request(config) {
    return new Promise((resolve, reject) => {
      // 对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get(config) {
    return this.request({ ...config, method: 'GET' })
  }
  post(config) {
    return this.request({ ...config, method: 'POST' })
  }
  put(config) {
    return this.request({ ...config, method: 'PUT' })
  }
  delete(config) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch(config) {
    return this.request({ ...config, method: 'PATCH' })
  }
  head(config) {
    return this.request({ ...config, method: 'HEAD' })
  }
  options(config) {
    return this.request({ ...config, method: 'OPTIONS' })
  }
}

export default AxiosApi
