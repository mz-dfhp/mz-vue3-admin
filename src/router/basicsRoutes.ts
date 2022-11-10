import { RouteRecordRaw } from 'vue-router'

const basicsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  }
]

export default basicsRoutes
