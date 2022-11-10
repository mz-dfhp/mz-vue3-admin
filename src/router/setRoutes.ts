import router from '@/router'
import asyncRoutes from './asyncRoutes'
import { routeStoreWithout } from '@/stores/modules/route'
import { menuStoreWithout } from '@/stores/modules/menu'
const routeStoreInstance = routeStoreWithout()
const menuStoreInstance = menuStoreWithout()

export async function setAsyncRoutes() {
  // 获取用户信息
  const userInfo = await getUserInfo()
  // 生成左侧菜单栏
  await menuStoreInstance.setMenus(asyncRoutes)
  // 扁平化路由 处理二级以上 keep-alive
  await routeStoreInstance.setRoutes(userInfo.routeList)
  for (let i = 0; i < asyncRoutes.length; i++) {
    await router.addRoute(asyncRoutes[i])
  }
}

function getUserInfo() {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      const userInfo = {
        name: 'mz',
        age: 18,
        routeList: [
          {
            path: '/component',
            name: 'Component',
            title: '组件',
            children: [
              {
                path: 'component-one',
                name: 'Component-one',
                title: '组件1'
              },
              {
                path: 'component-two',
                name: 'Component-two',
                title: '组件2'
              }
            ]
          },
          {
            path: '/',
            name: 'Index',
            title: '首页',
            children: [
              {
                path: '/index',
                name: 'Index-index',
                title: '工作台'
              }
            ]
          }
        ]
      }
      resolve(userInfo)
    }, 1000)
  })
}
