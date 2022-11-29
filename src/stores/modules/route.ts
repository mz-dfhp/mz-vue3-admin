import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash-es'
import store from '@/stores'
import { flatSystemRoutes } from '@/utils/route'
import { RouteRecordRaw } from 'vue-router'
interface IRoute {
  routes: Array<RouteRecordRaw>
}
const pid = 'STORE__ROUTE'
export const routeStore = defineStore(pid, {
  state: (): IRoute => ({
    routes: []
  }),
  getters: {
    getRoutes(state: IRoute) {
      const copeRoutes = cloneDeep(state.routes)
      return flatSystemRoutes(copeRoutes)
    }
  },
  actions: {
    setRoutes(result: RouteRecordRaw[]) {
      this.routes = result
    }
  }
})
export const routeStoreWithout = () => routeStore(store)
