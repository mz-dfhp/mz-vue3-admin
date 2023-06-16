import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import store from '@/store'

const pid = 'STORE__KEEPALIVE'
export const keepAliveStore = defineStore(pid, () => {
  const keepList = ref<string[]>([])

  const getkeepAlive = computed(() => keepList.value)

  function addkeepAlive(keepItem: string) {
    keepList.value = Array.from(new Set([...keepList.value, keepItem]))
  }

  function removekeepAlive(keepItem: string) {
    keepList.value = keepList.value.filter((item) => item !== keepItem)
  }

  return {
    keepList,
    getkeepAlive,
    addkeepAlive,
    removekeepAlive
  }
})
export const keepAliveStoreWithout = () => keepAliveStore(store)
