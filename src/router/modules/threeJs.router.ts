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
      path: 'hello-threeJs',
      name: `${routeName}-Hello-threeJs`,
      component: () => import('@/views/threeJs/hello-threejs.vue'),
      meta: {
        title: 'hello-threeJs'
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
