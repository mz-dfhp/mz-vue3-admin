import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
import { App } from 'vue'
import { basicsRoutes } from './basicsRoutes'

import { createRouterPermissions } from './permissions'

const router = createRouter({
  history:
    import.meta.env.MODE === 'github-io'
      ? createWebHashHistory()
      : createWebHistory(),
  routes: basicsRoutes
})
createRouterPermissions(router)

export function setupRouter(app: App<Element>) {
  app.use(router)
}
export default router
