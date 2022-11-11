import { cloneDeep } from 'lodash-es'
import { Route } from '../types/router'
import { IPermissionList } from '@/interface'
import { RouteRecordRaw } from 'vue-router'
function flatRoutes(
  routes: RouteRecordRaw[],
  routeCrumbs: Route.breadcrumb[] = [],
  url: string
) {
  const result: RouteRecordRaw[] = []
  routes.forEach((element) => {
    if (element.meta && element.meta.breadcrumb) {
      element.meta.breadcrumb = [
        ...routeCrumbs,
        { path: element.path, title: element?.meta?.title }
      ]
    }
    element.path = `${url}/${element.path}`
    if (element.children && element.children.length > 0) {
      const cope = cloneDeep(element.children)
      delete element.children
      result.push(...flatRoutes(cope, element?.meta?.breadcrumb, element.path))
    } else {
      result.push(element)
    }
  })
  return result
}
/**
 *
 * @param routes
 * @returns 扁平化路由
 */
export function flatSystemRoutes(systemRoutes: RouteRecordRaw[]) {
  const resultRoutes = [...systemRoutes]
  resultRoutes.forEach((route: RouteRecordRaw) => {
    if (route.children) {
      route.children.forEach((sonRoute) => {
        if (sonRoute.children) {
          sonRoute.children = flatRoutes(
            sonRoute.children,
            [
              { path: route.path, title: route?.meta?.title },
              { path: sonRoute.path, title: sonRoute?.meta?.title }
            ],
            ''
          )
        }
      })
    }
  })
  console.log(resultRoutes)
  return resultRoutes
}

/**
 *
 * @param allRoutes 前端路由
 * @param userRoutes 后端返回角色路由
 * @returns 过滤后的路由
 */
export function diffRouterList(
  allRoutes: Array<RouteRecordRaw>,
  userRoutes: Array<IPermissionList>
): Array<RouteRecordRaw> {
  const resultRoutes: Array<RouteRecordRaw> = []
  allRoutes.forEach((item) => {
    userRoutes.forEach((Item) => {
      if (item.name === Item.name || item?.meta?.hide) {
        if (item.children?.length && Item.children?.length) {
          item.children = diffRouterList(item.children, Item.children)
        }
        resultRoutes.push(item)
      }
    })
  })
  return resultRoutes
}
