import { AxiosRequestConfig } from 'axios'

interface MYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (config: any) => any
  responseInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  responseInterceptorCatch?: (config: any) => any
}

interface MYRequestConfig extends AxiosRequestConfig {
  interceptors?: MYRequestInterceptors
}

export { MYRequestInterceptors, MYRequestConfig }
