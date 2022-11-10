import { defineStore } from 'pinia'
import store from '@/stores'

interface IMenu {
  menus: []
}
export const menuStore = defineStore('menu', {
  state(): IMenu {
    return {
      menus: []
    }
  },
  getters: {
    getMenus(state: IMenu) {
      return state.menus
    }
  },
  actions: {
    setMenus(list: any) {
      this.menus = list
    }
  }
})

export const menuStoreWithout = () => menuStore(store)
