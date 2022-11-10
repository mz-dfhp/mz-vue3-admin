import { defineStore } from 'pinia'
import store from '@/stores'

interface IRoute {
  routes: []
}
export const routeStore = defineStore('route', {
  state(): IRoute {
    return {
      routes: []
    }
  },
  getters: {
    getRoutes(state: IRoute) {
      return state.routes
    }
  },
  actions: {
    setRoutes(list: any) {
      this.routes = list
    }
  }
})
export const routeStoreWithout = () => routeStore(store)
