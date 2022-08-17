import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import myRequest from '../src/service/index'

myRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单个请求拦截成功', config)
      return config
    },
    responseInterceptor: (config) => {
      console.log('单个响应拦截成功', config)
      return config
    }
  }
})

createApp(App).use(router).use(createPinia()).mount('#app')
