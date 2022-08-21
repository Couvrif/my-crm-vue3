import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'normalize.css'
import './assets/css/index.less'
import { refresh } from '@/store/login'
import { globalRegister } from './global'

const app = createApp(App)
app.use(createPinia())

refresh()

app.use(router).use(globalRegister).mount('#app')
