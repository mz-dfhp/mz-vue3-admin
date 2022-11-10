import { RouteRecordRaw } from 'vue-router'
const layout = () => import('@/layout/index.vue')
const routeName = 'Keep'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/Keep',
    name: routeName,
    component: layout,
    meta: {
      title: '缓存Keep'
    },
    children: [
      {
        path: 'Keep-one',
        name: `${routeName}-one`,
        component: () => import('@/views/keep/keep-one.vue'),
        meta: {
          title: '缓存组件一'
        }
      },
      {
        path: 'Keep-two',
        name: `${routeName}-two`,
        redirect: '',
        meta: {
          title: '缓存组件二'
        },
        children: [
          {
            path: 'Keep-two-demo',
            name: `${routeName}-Keep-two-demo`,
            component: () => import('@/views/keep/Keep-two-demo.vue'),
            meta: {
              title: '多级缓存页面'
            }
          }
        ]
      }
    ]
  }
]

export default routes
