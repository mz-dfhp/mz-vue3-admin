import { RouteMeta, RouteRecordName, RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    breadcrumb?: Route.breadcrumb[]
    keepAlive?: boolean
    activeMenu?: string
    title: string
    hide?: boolean
    sort?: number
  }
}
declare namespace Route {
  interface recordRaw extends Omit<RouteRecordRaw, 'meta' | 'children'> {
    meta: RouteMeta
    children?: recordRaw[]
  }
  interface recordMainRaw {
    meta: {
      title?: string
    }
    children: recordRaw[]
  }
  interface breadcrumb {
    path?: string
    title?: string
    hide?: boolean | undefined
    name?: RouteRecordName | undefined
  }
}
