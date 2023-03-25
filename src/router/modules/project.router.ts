import { RouteRecordRaw } from 'vue-router'
const layout = () => import('@/layout/index.vue')
const routeName = 'Project'
const routes: RouteRecordRaw = {
  path: '/project',
  name: routeName,
  component: layout,
  meta: {
    title: '个人项目',
    sort: 15,
    icon: 'i-bi:grid'
  },
  children: [
    {
      path: 'blog',
      name: `${routeName}-blog`,
      component: () => import('@/views/project/blog.vue'),
      meta: {
        title: 'blog'
      }
    },

    {
      path: 'vue3-admin',
      name: `${routeName}-vue3-admin`,
      component: () => import('@/views/project/vue3-admin.vue'),
      meta: {
        title: 'vue3-admin'
      }
    },
    {
      path: 'react18-admin',
      name: `${routeName}-react18-admin`,
      component: () => import('@/views/project/react18-admin.vue'),
      meta: {
        title: 'react18-admin'
      }
    },
    {
      path: 'vue-ui',
      name: `${routeName}-vue-ui`,
      component: () => import('@/views/project/vue-ui.vue'),
      meta: {
        title: 'vue-ui'
      }
    },
    {
      path: 'write-vue3',
      name: `${routeName}-write-vue3`,
      component: () => import('@/views/project/write-vue3.vue'),
      meta: {
        title: 'write-vue3'
      }
    },
    {
      path: 'writer-pinia',
      name: `${routeName}-writer-pinia`,
      component: () => import('@/views/project/writer-pinia.vue'),
      meta: {
        title: 'writer-pinia'
      }
    },
    {
      path: 'writer-react',
      name: `${routeName}-writer-react`,
      component: () => import('@/views/project/writer-react.vue'),
      meta: {
        title: 'writer-react'
      }
    }
  ]
}

export default routes
