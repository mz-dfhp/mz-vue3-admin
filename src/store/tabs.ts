import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { RouteLocationNormalized } from 'vue-router'
import store from '@/store'
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
const pid = 'STORE__TABS'
export const tabsStore = defineStore(pid, () => {
  const tabList = ref<RouteItem[]>([])
  const getTabList = computed(() => tabList.value)

  function filterList(list: RouteItem[], route: RouteItem) {
    return list.some(
      (item) => item.name === route.name || withoutTabs.includes(route.name)
    )
  }

  function addTabs(route: RouteItem): void {
    const flag = filterList(tabList.value, route)
    if (flag) return
    tabList.value.push(route)
  }

  function closeLeftTabs(name: string): void {
    const index: number = tabList.value.findIndex((item) => item.name === name)
    index !== -1 && tabList.value.splice(1, index - 1)
  }

  function closeRightTabs(name: string): void {
    const index: number = tabList.value.findIndex((item) => item.name === name)
    index !== -1 && tabList.value.splice(index + 1)
  }

  function closeCurrentTabs(routeName: string): void {
    const index: number = tabList.value.findIndex(
      (item) => item.name === routeName
    )
    tabList.value.splice(index, 1)
  }

  function closeOtherTabs(name: string): void {
    tabList.value = tabList.value.filter(
      (item, index) => item.name === name || index === 0
    )
  }

  function closeAllTabs() {
    tabList.value.splice(1)
  }
  return {
    tabList,
    getTabList,
    addTabs,
    closeLeftTabs,
    closeRightTabs,
    closeCurrentTabs,
    closeOtherTabs,
    closeAllTabs
  }
})

export const tabsStoreWithout = () => tabsStore(store)
