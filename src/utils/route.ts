import { cloneDeep } from 'lodash-es'
import { Route } from '@/types/router'
import { IPermissionList } from '@/interface'
import { RouteRecordRaw } from 'vue-router'
function flatRoutes(
  routes: RouteRecordRaw[],
  routeCrumbs: Route.breadcrumb[] = [],
  url: string
) {
  const result: RouteRecordRaw[] = []
  routes.forEach((element) => {
    if (element.meta) {
      element.meta.breadcrumb = [
        ...routeCrumbs,
        {
          path: element.path,
          name: element?.name,
          title: element?.meta?.title,
          hide: element?.meta?.hide
        }
      ]
    }
    element.path = `${url ? url + '/' : ''}${element.path}`
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
        const routeCrumbs = [
          {
            path: route.path,
            name: route?.name,
            title: route?.meta?.title,
            hide: route?.meta?.hide
          },
          {
            path: sonRoute.path,
            name: sonRoute?.name,
            title: sonRoute?.meta?.title,
            hide: sonRoute?.meta?.hide
          }
        ]
        if (sonRoute.meta) {
          sonRoute.meta.breadcrumb = routeCrumbs
        }
        if (sonRoute.children) {
          sonRoute.children = flatRoutes(sonRoute.children, routeCrumbs, '')
        }
      })
    }
  })
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

export function sortList(list: IPermissionList[]) {
  return list.slice(0).sort((a, b) => (a?.sort || 1) - (b?.sort || 0))
}
