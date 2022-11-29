import { defineStore } from 'pinia'
import store from '@/stores'
import { sortList } from '@/utils/route'
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
      this.menus = sortList(list)
    }
  }
})

export const menuStoreWithout = () => menuStore(store)
