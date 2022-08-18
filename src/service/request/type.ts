import { AxiosRequestConfig } from 'axios'

interface MYRequestInterceptors<T = AxiosRequestConfig> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (config: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (config: any) => any
}

interface MYRequestConfig<T = AxiosRequestConfig> extends AxiosRequestConfig {
  interceptors?: MYRequestInterceptors<T>
  showLoading?: boolean
}

export { MYRequestInterceptors, MYRequestConfig }
