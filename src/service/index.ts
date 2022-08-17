import MYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const myRequest = new MYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求成功', config)
      const token = ''
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    responseInterceptor: (config) => {
      console.log('响应成功', config)
      return config
    }
  }
})

export default myRequest
