
export const mock = {
  async request(config) {
    const isLocal = !config.mock.startsWith('http')
    let url = config.mock
    if (isLocal) {
      url = import.meta.env.VITE_APP_BASE_API + config.mock
    }
    const response = await fetch(url, config)
    if (response.ok) {
      const res = await response.json()
      return isLocal ? res.data : res
    }
  },
  get(url) {
    return this.request({
      mock: url,
      method: 'GET',
    })
  },
}
