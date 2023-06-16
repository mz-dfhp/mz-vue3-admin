import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash-es'
import store from '@/store'
import { flatSystemRoutes } from '@/utils'
import { RouteRecordRaw } from 'vue-router'

const pid = 'STORE__ROUTE'
export const routeStore = defineStore(pid, () => {
  const routes = ref<RouteRecordRaw[]>([])

  const getRoutes = computed(() => {
    const copeRoutes = cloneDeep(routes.value)
    return flatSystemRoutes(copeRoutes)
  })

  function setRoutes(result: RouteRecordRaw[]) {
    routes.value = result
  }

  return {
    routes,
    getRoutes,
    setRoutes
  }
})
export const routeStoreWithout = () => routeStore(store)
