import { RouteRecordRaw } from 'vue-router'
const modules = import.meta.glob('./modules/*.router.ts', {
  import: 'default',
  eager: true
})
let modulesRoutes: Array<RouteRecordRaw> = []
Object.keys(modules).forEach((item) => {
  modulesRoutes = modulesRoutes.concat(modules[item] as Array<RouteRecordRaw>)
  // modules[item]().then((mod) => {
  //   modulesRoutes = modulesRoutes.concat(mod as Array<RouteRecordRaw>)
  // })
})
const asyncRoutes: Array<RouteRecordRaw> = modulesRoutes

export default asyncRoutes
