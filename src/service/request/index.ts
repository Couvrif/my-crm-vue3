import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { MYRequestConfig, MYRequestInterceptors } from './type'
import { ElLoading } from 'element-plus'

class MYRequest {
  instance: AxiosInstance
  interceptors?: MYRequestInterceptors
  // loading: any

  constructor(config: MYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 单个实例化MYRequest的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全部实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全部实例都有的请求成功', config)
        // ElLoading.service({
        //   lock: true,
        //   text: '正在请求数据....',
        //   background: 'rgba(0,0,0,0.5)'
        // })
        return config
      },
      (err) => {
        console.log('全部实例都有的请求失败', config)
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('全部实例都有的响应成功', config)
        // this.loading?.close()
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败')
        }
        return config
      },
      (err) => {
        console.log('全部实例都有的响应失败', config)
        // this.loading?.close()
        if (err.response.status === 404) {
          console.log('404错误')
        }
        return err
      }
    )
  }

  request(config: MYRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    this.instance.request(config).then((res: AxiosRequestConfig) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default MYRequest
