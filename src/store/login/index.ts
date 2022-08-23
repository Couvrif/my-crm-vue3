import { defineStore } from 'pinia'
import { postLogin, getUsers, getMenus } from '@/service/login/login'
import { loginParams } from '@/service/login/type'
import router from '@/router'
import cache from '@/utils/cache'
import { mapMenusToPermissions, mapMenusToRoutes } from '@/utils/initRouter'
import { toRaw } from 'vue'
import { getPageListData } from '@/service/main/system/system'

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
      menus: [],
      permissions: [''],
      entireDepartment: [],
      entireRole: []
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
      this.initRouter(menusResult.data)
      router.push('/main')
    },
    initRouter(data: any[]) {
      // 初始化路由菜单
      const route = mapMenusToRoutes(data)
      route.forEach((item) => {
        router.addRoute('main', item)
      })
      this.permissions = mapMenusToPermissions(data)
      this.initEntire()
      console.log('初始化数据', router, this.permissions)
    },
    refreshCache() {
      const token = cache.getCache('token')
      this.token = token ?? ''
      const userInfo = cache.getCache('userInfo')
      this.userInfo = userInfo ?? ''
      const menus = cache.getCache('menus')
      this.menus = menus ?? ''
      this.initRouter(this.menus)
    },
    async initEntire() {
      const departmentData = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })

      const roleData = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      this.entireDepartment = departmentData.data.list
      this.entireRole = roleData.data.list
      console.log(this.entireRole, this.entireDepartment)
    }
  }
})

export function refresh() {
  const Login = loginStore()
  Login.refreshCache()
}
