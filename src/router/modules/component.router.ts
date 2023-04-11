import { RouteRecordRaw } from 'vue-router'
const layout = () => import('@/layout/index.vue')
const routeName = 'Component'
const routes: RouteRecordRaw = {
  path: '/component',
  name: routeName,
  component: layout,
  meta: {
    title: '组件库',
    sort: 3,
    icon: 'i-bi:grid'
  },
  children: [
    {
      path: 'music',
      name: `${routeName}-music`,
      component: () => import('@/views/component/music.vue'),
      meta: {
        title: '音乐播放器'
      }
    },
    {
      path: 'video',
      name: `${routeName}-video`,
      component: () => import('@/views/component/video.vue'),
      meta: {
        title: '视频播放器'
      }
    },
    {
      path: 'QRCode',
      name: `${routeName}-QRCode`,
      component: () => import('@/views/component/QRCode.vue'),
      meta: {
        title: '二维码'
      }
    },
    {
      path: 'signature',
      name: `${routeName}-signature`,
      component: () => import('@/views/component/signature-demo.vue'),
      meta: {
        title: '签名'
      }
    },
    {
      path: 'growth',
      name: `${routeName}-growth`,
      component: () => import('@/views/component/growth.vue'),
      meta: {
        title: '数字增长'
      }
    }
  ]
}

export default routes
