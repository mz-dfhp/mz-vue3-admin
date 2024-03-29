import { RouteRecordRaw } from 'vue-router'
const layout = () => import('@/layout/index.vue')
const routeName = 'Index'
const routes: RouteRecordRaw = {
  path: '/',
  name: routeName,
  component: layout,
  meta: {
    title: '首页',
    sort: 1,
    icon: 'i-bi:grid'
  },
  redirect: '/index',
  children: [
    {
      path: 'index',
      name: `${routeName}-index`,
      component: () => import('@/views/index/index.vue'),
      meta: {
        title: '工作台'
      }
    }
  ]
}

export default routes
