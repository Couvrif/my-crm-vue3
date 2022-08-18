import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'normalize.css'
import './assets/css/index.less'
import myRequest from '../src/service/index'

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// myRequest
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'GET',
//     // showLoading: false,
//     interceptors: {
//       requestInterceptor: (config) => {
//         console.log('单个请求拦截成功', config)
//         return config
//       },
//       responseInterceptor: (config) => {
//         console.log('单个响应拦截成功', config)
//         return config
//       }
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

createApp(App).use(router).use(createPinia()).mount('#app')
