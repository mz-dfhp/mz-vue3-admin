import { keepAliveStore } from './../stores/modules/keepAlive'
import { routeStoreWithout } from '@/stores/modules/route'
import { userStoreWithout } from '@/stores/modules/user'
import { Router } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { setAsyncRoutes } from './setRoutes'

export function createRouterPermissions(router: Router) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  router.beforeEach(async (to, from, next) => {
    const userStoreInstance = userStoreWithout()
    const routeStoreInstance = routeStoreWithout()
    const token = userStoreInstance.getToken
    const routeLength = routeStoreInstance.getRoutes.length
    NProgress.start()
    // 如果有token
    if (token) {
      if (to.path === '/login') {
        console.log('还要进登录')
        next({
          path: '/index'
        })
      } else {
        if (routeLength === 0) {
          await setAsyncRoutes()
          return next({ ...to, replace: true })
        }
        next()
      }
    } else {
      console.log('无token')
      if (to.path !== '/login') {
        next({
          path: '/login'
        })
      } else {
        next()
      }
    }
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  router.afterEach((to, from, failure) => {
    const keepAliveStoreInstance = keepAliveStore()
    if (to.meta.keepAlive) {
      console.log(to)
      keepAliveStoreInstance.addkeepAlive(to.name as string)
    }
    NProgress.done()
  })

  router.onError((error) => {
    console.log(error, '路由错误')
  })
}
