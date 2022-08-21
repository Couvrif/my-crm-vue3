import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import cache from '@/utils/cache'
import { firstMenu } from '@/utils/initRouter'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views//login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: "about" */ '@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    const token = cache.getCache('token')
    if (!token) return next('/login')
  }

  if (to.path === '/main') {
    next(firstMenu.url)
  }
  console.log(router.getRoutes(), to)

  next()
})

export default router
