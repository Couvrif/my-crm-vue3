import { defineStore } from 'pinia'
import { postLogin } from '@/service/login/login'
import { loginParams } from '@/service/login/type'
import { id } from 'element-plus/es/locale'

export default defineStore('login', {
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  actions: {
    // async userLogin(payload: loginParams) {
    // const result = await postLogin(payload)
    // const { id, token } = result.data
    // this.token = token
    // this.userInfo = id
    // console.log('aaaaa', result, this.token, this.userInfo)
    // }
  }
})
