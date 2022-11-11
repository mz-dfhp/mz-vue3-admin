import { RouteRecordRaw } from 'vue-router'
const layout = () => import('@/layout/index.vue')
const routeName = 'Keep'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/keep',
    name: routeName,
    component: layout,
    meta: {
      title: '缓存Keep'
    },
    children: [
      {
        path: 'keep-one',
        name: `${routeName}-one-page`,
        component: () => import('@/views/keep/keep-one-page.vue'),
        meta: {
          title: '缓存组件一',
          keepAlive: true
        }
      },
      {
        path: 'keep-two',
        name: `${routeName}-two`,
        meta: {
          title: '缓存组件二'
        },
        redirect: '',
        children: [
          {
            path: 'keep-two-page',
            name: `${routeName}-two-page`,
            component: () => import('@/views/keep/keep-two-page.vue'),
            meta: {
              title: '二级缓存页面',
              keepAlive: true
            }
          },
          {
            path: 'keep-three',
            name: `${routeName}-three`,
            meta: {
              title: '缓存组件三'
            },
            redirect: '',
            children: [
              {
                path: 'keep-three-page',
                name: `${routeName}-three-page`,
                component: () => import('@/views/keep/keep-three-page.vue'),
                meta: {
                  title: '三级缓存页面',
                  keepAlive: true
                }
              }
            ]
          }
        ]
      }
    ]
  }
]

export default routes
