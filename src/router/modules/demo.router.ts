import { RouteRecordRaw } from 'vue-router'
const layout = () => import('@/layout/index.vue')
const routeName = 'Demo'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/demo',
    name: routeName,
    component: layout,
    meta: {
      title: 'Demo',
      sort: 2,
      icon: 'i-zondicons-view-tile'
    },
    children: [
      {
        path: 'demo-one',
        name: `${routeName}-one`,
        component: () => import('@/views/demo/demo-one.vue'),
        meta: {
          title: '错误页'
        }
      }
      // {
      //   path: 'demo-two',
      //   name: `${routeName}-two`,
      //   component: () => import('@/views/demo/demo-two.vue'),
      //   meta: {
      //     title: '手写qiankun'
      //   }
      // }
    ]
  }
]

export default routes
