import { RouteRecordRaw } from 'vue-router'
const layout = () => import('@/layout/index.vue')
const routeName = 'System'
const routes: RouteRecordRaw = {
  path: '/system',
  name: routeName,
  component: layout,
  meta: {
    title: '系统配置',
    sort: 10,
    icon: 'i-bi:grid'
  },
  children: [
    {
      path: 'personal',
      name: `${routeName}-personal`,
      component: () => import('@/views/system/personal.vue'),
      meta: {
        title: '个人中心'
      }
    },
    {
      path: 'user',
      name: `${routeName}-user`,
      component: () => import('@/views/system/user.vue'),
      meta: {
        title: '用户管理'
      }
    },
    {
      path: 'role',
      name: `${routeName}-role`,
      component: () => import('@/views/system/role.vue'),
      meta: {
        title: '角色管理'
      }
    },
    {
      path: 'department',
      name: `${routeName}-department`,
      component: () => import('@/views/system/department.vue'),
      meta: {
        title: '部门管理'
      }
    },
    {
      path: 'menu',
      name: `${routeName}-menu`,
      component: () => import('@/views/system/menu.vue'),
      meta: {
        title: '菜单管理'
      }
    },
    {
      path: 'log',
      name: `${routeName}-log`,
      component: () => import('@/views/system/log.vue'),
      meta: {
        title: '系统日志'
      }
    }
  ]
}

export default routes
