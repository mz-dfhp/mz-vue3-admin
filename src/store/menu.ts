import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import store from '@/store'
import { IPermission } from '@/interface'

const pid = 'STORE__MENU'
export const menuStore = defineStore(pid, () => {
  const menus = ref<IPermission[]>([])
  const getMenus = computed(() => menus.value)

  function setMenus(list: IPermission[]) {
    function sortList(list: IPermission[]) {
      return list.slice(0).sort((a, b) => (a?.sort || 1) - (b?.sort || 0))
    }
    menus.value = sortList(list)
  }

  return {
    menus,
    getMenus,
    setMenus
  }
})

export const menuStoreWithout = () => menuStore(store)
