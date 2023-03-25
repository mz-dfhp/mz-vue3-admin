import { RouteRecordRaw } from 'vue-router'
const layout = () => import('@/layout/index.vue')
const routeName = 'ThreeJs'
const routes: RouteRecordRaw = {
  path: '/threeJs',
  name: routeName,
  component: layout,
  meta: {
    title: 'threeJs',
    sort: 10,
    icon: 'i-bi:grid'
  },
  children: [
    {
      path: 'threeJs-one',
      name: `${routeName}-one`,
      component: () => import('@/views/threeJs/threeJs-one.vue'),
      meta: {
        title: 'threeJs-one'
      }
    },
    {
      path: 'threeJs-two',
      name: `${routeName}-two`,
      component: () => import('@/views/threeJs/threeJs-two.vue'),
      meta: {
        title: 'threeJs-two'
      }
    }
  ]
}

export default routes
