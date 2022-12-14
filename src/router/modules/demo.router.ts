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
          title: '手写mini-qiankun'
        }
      },
      {
        path: 'demo-five',
        name: `${routeName}-five`,
        component: () => import('@/views/demo/demo-five.vue'),
        meta: {
          title: '拖拽'
        }
      }
    ]
  }
]

export default routes
