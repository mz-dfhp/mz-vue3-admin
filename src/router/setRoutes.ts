import router from '@/router'
import { asyncRoutes, layoutRoutes } from './asyncRoutes'
import { routeStoreWithout } from '@/stores/modules/route'
import { menuStoreWithout } from '@/stores/modules/menu'
import { userStoreWithout } from '@/stores/modules/user'
import { getUserInfo } from '@/api'
import { diffRouterList } from '@/utils/route'
import { errorRoutes } from './basicsRoutes'
export async function setAsyncRoutes() {
  const routeStoreInstance = routeStoreWithout()
  const menuStoreInstance = menuStoreWithout()
  const userStoreInstance = userStoreWithout()
  // 获取用户信息
  const userInfo = await getUserInfo(userStoreInstance.getToken)
  // 保存用户信息
  await userStoreInstance.setUserInfo(userInfo)
  // 先对路由进行对比 过滤无权限的路由 过滤路由后扁平化路由 处理二级以上 keep-alive
  const result = await diffRouterList([...asyncRoutes], userInfo.permission)
  // 生成用来注册路由
  layoutRoutes.children = [...result]
  await routeStoreInstance.setRoutes([layoutRoutes, ...errorRoutes])
  // 生成左侧菜单栏
  await menuStoreInstance.setMenus(userInfo.permission)
  //处理完addRoute
  routeStoreInstance.getRoutes.forEach((item) => {
    router.addRoute(item)
  })
}
