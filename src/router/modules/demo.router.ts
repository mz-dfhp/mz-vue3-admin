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
      icon: 'i-bi:grid'
    },
    children: [
      {
        path: 'demo-one',
        name: `${routeName}-one`,
        component: () => import('@/views/demo/demo-one.vue'),
        meta: {
          title: '错误页'
        }
      },
      {
        path: 'demo-two',
        name: `${routeName}-two`,
        component: () => import('@/views/demo/demo-two'),
        meta: {
          title: 'tsx'
        }
      },
      {
        path: 'demo-three',
        name: `${routeName}-three`,
        component: () => import('@/views/demo/demo-three.vue'),
        meta: {
          title: 'iframe'
        }
      },
      {
        path: 'demo-four',
        name: `${routeName}-four`,
        component: () => import('@/views/demo/demo-four.vue'),
        meta: {
          title: 'demo'
        }
      }
    ]
  }
]

export default routes
