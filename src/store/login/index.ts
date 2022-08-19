import { defineStore } from 'pinia'
import { postLogin, getUsers, getMenus } from '@/service/login/login'
import { loginParams } from '@/service/login/type'
import router from '@/router'
import cache from '@/utils/cache'

interface Menust {
  type: number
  id: number
  [propname: string]: any
}

export const loginStore = defineStore('login', {
  state() {
    return {
      token: '',
      userInfo: {},
      menus: {}
    }
  },
  actions: {
    async userLogin(payload: loginParams) {
      const loginResult = await postLogin(payload)
      const { id, token } = loginResult.data
      this.token = token
      cache.setCache('token', token)

      const userResult = await getUsers(id)
      this.userInfo = userResult.data
      cache.setCache('userInfo', this.userInfo)

      const menusResult = await getMenus(id)
      this.menus = menusResult.data
      cache.setCache('menus', this.menus)
      console.log('aaaaa', loginResult, this.token, this.userInfo, this.menus)
      router.push('/home')
    },
    refreshCache() {
      const token = cache.getCache('token')
      this.token = token ?? ''
      const userInfo = cache.getCache('userInfo')
      this.userInfo = userInfo ?? ''
      const menus = cache.getCache('menus')
      this.menus = menus ?? ''
    }
  }
})

export function refresh() {
  const Login = loginStore()
  Login.refreshCache()
}
