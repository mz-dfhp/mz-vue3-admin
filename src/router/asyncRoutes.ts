import { RouteRecordRaw } from 'vue-router'

const layout = () => import('@/layout/index.vue')

const modules = import.meta.glob('./modules/*.router.ts', {
  import: 'default',
  eager: true
})

/**
 * 动态路由layout
 */
export const layoutRoutes: RouteRecordRaw = {
  path: '/',
  component: layout,
  meta: {
    title: '首页'
  },
  redirect: '/index',
  children: []
}

let modulesRoutes: RouteRecordRaw[] = []

Object.keys(modules).forEach((item) => {
  modulesRoutes = modulesRoutes.concat(modules[item] as RouteRecordRaw[])
})

/**
 * 动态路由
 */
export const asyncRoutes: RouteRecordRaw[] = modulesRoutes
