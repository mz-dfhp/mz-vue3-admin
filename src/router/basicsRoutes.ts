import { RouteRecordRaw } from 'vue-router'

export const basicsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  }
]
export const errorRoutes: Array<RouteRecordRaw> = [
  {
    path: '/:path(.*)*',
    name: '404',
    component: () => import('@/views/error/404.vue'),
    meta: {
      title: '404'
    }
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/error/403.vue'),
    meta: {
      title: '403'
    }
  },
  {
    path: '/redirect/:path(.*)',
    name: 'Redirect',
    component: () => import('@/views/redirect/index'),
    meta: {
      title: '刷新'
    }
  }
]
