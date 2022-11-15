import { defineStore } from 'pinia'
import { RouteLocationNormalized } from 'vue-router'
import store from '@/stores'
export type RouteItem = Partial<RouteLocationNormalized> & {
  fullPath: string
  path: string
  name: string
  hash: string
  meta: object
  params: object
  query: object
}
const withoutTabs: string[] = []
interface ITabsState {
  tabList: RouteItem[]
}
export const tabsStore = defineStore('tabs', {
  state: (): ITabsState => {
    return {
      tabList: []
    }
  },
  getters: {
    getTabList(state) {
      return state.tabList
    }
  },
  actions: {
    initTabs(list: RouteItem[]) {
      this.tabList = list.filter((item) => !withoutTabs.includes(item.name))
    },
    addTabs(route: RouteItem): void {
      const flag = filterList(this.tabList, route)
      console.log(flag)
      if (filterList(this.tabList, route)) return
      this.tabList.push(route)
    },
    closeLeftTabs(route: RouteItem): void {
      const index: number = this.tabList.findIndex(
        (item) => item.name === route.name
      )
      this.tabList.splice(0, index)
    },
    closeRightTabs(route: RouteItem): void {
      const index: number = this.tabList.findIndex(
        (item) => item.name === route.name
      )
      this.tabList.splice(index + 1)
    },
    closeCurrentTabs(routeName: string): void {
      const index: number = this.tabList.findIndex(
        (item) => item.name === routeName
      )
      this.tabList.splice(index, 1)
    },
    closeOtherTabs(route: RouteItem): void {
      this.tabList = this.tabList.filter(
        (item) => item.name === route.name || item.meta.noCloseTabs
      )
    },
    closeAllTabs() {
      this.tabList = []
    }
  }
})

function filterList(list: RouteItem[], route: RouteItem) {
  return list.some(
    (item) => item.name === route.name || withoutTabs.includes(route.name)
  )
}

export const tabsStoreWithout = () => tabsStore(store)
