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
const pid = 'STORE__TABS'
export const tabsStore = defineStore(pid, {
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
    addTabs(route: RouteItem): void {
      const flag = filterList(this.tabList, route)
      if (flag) return
      this.tabList.push(route)
    },
    closeLeftTabs(name: string): void {
      const index: number = this.tabList.findIndex((item) => item.name === name)
      index !== -1 && this.tabList.splice(1, index - 1)
    },
    closeRightTabs(name: string): void {
      const index: number = this.tabList.findIndex((item) => item.name === name)
      index !== -1 && this.tabList.splice(index + 1)
    },
    closeCurrentTabs(routeName: string): void {
      const index: number = this.tabList.findIndex(
        (item) => item.name === routeName
      )
      this.tabList.splice(index, 1)
    },
    closeOtherTabs(name: string): void {
      this.tabList = this.tabList.filter(
        (item, index) => item.name === name || index === 0
      )
    },
    closeAllTabs() {
      this.tabList.splice(1)
    }
  },
  persist: {
    storage: localStorage,
    paths: []
  }
})

function filterList(list: RouteItem[], route: RouteItem) {
  return list.some(
    (item) => item.name === route.name || withoutTabs.includes(route.name)
  )
}

export const tabsStoreWithout = () => tabsStore(store)
