import router from '@/router'
import asyncRoutes from './asyncRoutes'
import { routeStoreWithout } from '@/store/route'
import { menuStoreWithout } from '@/store/menu'
import { userStoreWithout } from '@/store/user'
import { getUserInfo } from '@/api'
import { diffRouterList } from '@/utils'
import { errorRoutes } from './basicsRoutes'

export async function setAsyncRoutes() {
  const routeStoreInstance = routeStoreWithout()
  const menuStoreInstance = menuStoreWithout()
  const userStoreInstance = userStoreWithout()
  // 获取用户信息
  const userInfo = await getUserInfo(userStoreInstance.getToken)
  // 保存用户信息
  await userStoreInstance.setUserInfo(userInfo)
  // 先对路由进行对比 过滤无权限的路由
  const result = await diffRouterList([...asyncRoutes], userInfo.permission)
  // 过滤路由后扁平化路由 处理二级以上 keep-alive
  // 生成用来注册路由
  await routeStoreInstance.setRoutes([...errorRoutes, ...result])
  // 生成左侧菜单栏
  await menuStoreInstance.setMenus(userInfo.permission)
  //处理完addRoute
  routeStoreInstance.getRoutes.forEach((item) => {
    router.addRoute(item)
  })
}
