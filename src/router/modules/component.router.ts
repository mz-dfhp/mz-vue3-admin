import { RouteRecordRaw } from 'vue-router'
const layout = () => import('@/layout/index.vue')
const routeName = 'Component'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/component',
    name: routeName,
    component: layout,
    meta: {
      title: '组件',
      sort: 3,
      icon: 'i-zondicons-load-balancer'
    },
    children: [
      {
        path: 'component-one',
        name: `${routeName}-one`,
        component: () => import('@/views/component/component-one.vue'),
        meta: {
          title: '组件1'
        }
      },
      {
        path: 'component-two',
        name: `${routeName}-two`,
        component: () => import('@/views/component/component-two.vue'),
        meta: {
          title: '组件2'
        }
      }
    ]
  }
]

export default routes
