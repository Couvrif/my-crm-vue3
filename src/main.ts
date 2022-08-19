import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'normalize.css'
import './assets/css/index.less'
import { refresh } from '@/store/login'

createApp(App).use(router).use(createPinia()).mount('#app')

refresh()
