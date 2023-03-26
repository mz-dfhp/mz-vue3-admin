import { RouteRecordRaw } from 'vue-router'
const layout = () => import('@/layout/index.vue')
const routeName = 'Twice'
const routes: RouteRecordRaw = {
  path: '/twice',
  name: routeName,
  component: layout,
  meta: {
    title: '二次封装',
    sort: 3,
    icon: 'i-bi:grid'
  },
  children: [
    {
      path: 'twice-table',
      name: `${routeName}-table`,
      component: () => import('@/views/twice/table.vue'),
      meta: {
        title: 'table封装'
      }
    },
    {
      path: 'uploadImg',
      name: `${routeName}-uploadImg`,
      component: () => import('@/views/twice/uploadImg.vue'),
      meta: {
        title: '单图上传'
      }
    },
    {
      path: 'uploadImgs',
      name: `${routeName}-uploadImgs`,
      component: () => import('@/views/twice/uploadImgs.vue'),
      meta: {
        title: '多图上传'
      }
    }
  ]
}

export default routes
