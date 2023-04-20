import { keepAliveStore } from '@/store/modules/keepAlive'
import { routeStoreWithout } from '@/store/modules/route'
import { userStoreWithout } from '@/store/modules/user'
import { Router } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { setAsyncRoutes } from './setRoutes'

export function createRouterPermissions(router: Router) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  router.beforeEach(async (to, from, next) => {
    to.meta.title && (document.title = to.meta.title)
    const userStoreInstance = userStoreWithout()
    const routeStoreInstance = routeStoreWithout()
    const token = userStoreInstance.getToken
    const routeLength = routeStoreInstance.getRoutes.length
    NProgress.start()
    // 如果有token
    if (token) {
      if (to.path === '/login') {
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
      if (to.path !== '/login') {
        return next({
          path: '/login',
          replace: true
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
      keepAliveStoreInstance.addkeepAlive(to.name as string)
    }
    NProgress.done()
  })

  router.onError((error) => {
    console.log(error, '路由错误')
  })
}
