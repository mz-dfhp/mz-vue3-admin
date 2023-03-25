import { RouteRecordRaw } from 'vue-router'
const layout = () => import('@/layout/index.vue')
const routeName = 'screen'
const routes: RouteRecordRaw = {
  path: '/screen',
  name: routeName,
  component: layout,
  meta: {
    title: '数据大屏',
    sort: 10,
    icon: 'i-bi:grid'
  },
  children: [
    {
      path: 'screen-one',
      name: `${routeName}-one`,
      component: () => import('@/views/screen/screen-one.vue'),
      meta: {
        title: 'screen-one'
      }
    },
    {
      path: 'screen-two',
      name: `${routeName}-two`,
      component: () => import('@/views/screen/screen-two.vue'),
      meta: {
        title: 'screen-two'
      }
    }
  ]
}

export default routes
