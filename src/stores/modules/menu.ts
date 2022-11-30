import { defineStore } from 'pinia'
import store from '@/stores'
import { IPermissionList } from '@/interface'

interface IMenu {
  menus: IPermissionList[]
}
const pid = 'STORE__MENU'
export const menuStore = defineStore(pid, {
  state: (): IMenu => ({
    menus: []
  }),
  getters: {
    getMenus(state: IMenu) {
      return state.menus
    }
  },
  actions: {
    setMenus(list: IPermissionList[]) {
      function sortList(list: IPermissionList[]) {
        return list.slice(0).sort((a, b) => (a?.sort || 1) - (b?.sort || 0))
      }
      this.menus = sortList(list)
    }
  }
})

export const menuStoreWithout = () => menuStore(store)
