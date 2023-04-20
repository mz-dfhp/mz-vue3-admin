import { defineStore } from 'pinia'
import store from '@/store'
import { IPermission } from '@/interface'

interface IMenu {
  menus: IPermission[]
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
    setMenus(list: IPermission[]) {
      function sortList(list: IPermission[]) {
        return list.slice(0).sort((a, b) => (a?.sort || 1) - (b?.sort || 0))
      }
      this.menus = sortList(list)
    }
  }
})

export const menuStoreWithout = () => menuStore(store)
