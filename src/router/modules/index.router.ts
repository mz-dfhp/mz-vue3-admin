import { RouteRecordRaw } from 'vue-router'
const routeName = 'Index'

const routes: RouteRecordRaw = {
  path: 'index',
  name: `${routeName}`,
  component: () => import('@/views/index/index.vue'),
  meta: {
    title: '工作台'
  }
}

export default routes
