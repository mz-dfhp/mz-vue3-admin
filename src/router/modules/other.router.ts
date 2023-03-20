import { RouteRecordRaw } from 'vue-router'
const layout = () => import('@/layout/index.vue')
const routeName = 'Other'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/other',
    name: routeName,
    component: layout,
    meta: {
      title: '其他',
      sort: 2,
      icon: 'i-bi:grid'
    },
    children: [
      {
        path: 'error',
        name: `${routeName}-error`,
        component: () => import('@/views/other/error.vue'),
        meta: {
          title: '错误页'
        }
      },
      {
        path: 'tsx',
        name: `${routeName}-tsx`,
        component: () => import('@/views/other/tsx'),
        meta: {
          title: 'tsx'
        }
      },
      {
        path: 'iframe',
        name: `${routeName}-iframe`,
        component: () => import('@/views/other/iframe.vue'),
        meta: {
          title: 'iframe'
        }
      },
      {
        path: 'watermark',
        name: `${routeName}-watermark`,
        component: () => import('@/views/other/watermark.vue'),
        meta: {
          title: '水印'
        }
      }
    ]
  }
]

export default routes
