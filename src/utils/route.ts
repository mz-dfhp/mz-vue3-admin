import { cloneDeep } from 'lodash-es'
import { Route } from '@/typings/router'
import { IPermission } from '@/interface'
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
          ...element?.meta
          // title: element?.meta?.title,
          // hide: element?.meta?.hide
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
            ...route.meta
            // title: route?.meta?.title,
            // hide: route?.meta?.hide
          },
          {
            path: sonRoute.path,
            name: sonRoute?.name,
            ...sonRoute?.meta
            // title: sonRoute?.meta?.title,
            // hide: sonRoute?.meta?.hide
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
  userRoutes: Array<IPermission>
): Array<RouteRecordRaw> {
  const resultRoutes: Array<RouteRecordRaw> = []
  allRoutes.forEach((item) => {
    if (item?.meta?.hide) {
      resultRoutes.push(item)
    }
    userRoutes.forEach((Item) => {
      if (item.name === Item.name) {
        if (item.children?.length && Item.children?.length) {
          item.children = diffRouterList(item.children, Item.children)
        }
        resultRoutes.push(item)
      }
    })
  })
  return resultRoutes
}

/**
 *
 * @param list
 * @returns 左侧菜单栏 后期根据后端字段自行修改
 *          这个要删掉的 因为后端的返回的格式不要转换
 *          只是前端自动生成方便一点
 */
export function formatteRoutes(list: Array<RouteRecordRaw>) {
  const result: IPermission[] = []
  list.forEach((item) => {
    !item.meta?.hide &&
      result.push({
        path: item.path,
        name: item.name as string,
        title: item.meta?.title,
        sort: item.meta?.sort,
        icon: item.meta?.icon,
        children: item.children ? formatteRoutes(item.children) : undefined
      })
  })
  return result
}
