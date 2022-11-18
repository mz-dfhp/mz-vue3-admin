import { defineStore } from 'pinia'
import store from '@/stores'

interface IKeepList {
  keepList: Array<string>
}
export const keepAliveStore = defineStore('keepAlive', {
  state(): IKeepList {
    return {
      keepList: []
    }
  },
  getters: {
    getkeepAlive(state: IKeepList) {
      return state.keepList
    }
  },
  actions: {
    addkeepAlive(keepItem: string) {
      this.keepList = Array.from(new Set([...this.keepList, keepItem]))
    },
    removekeepAlive(keepItem: string) {
      const list = this.keepList.filter((item) => item !== keepItem)
      this.keepList = list
    }
  }
})
export const keepAliveStoreWithout = () => keepAliveStore(store)
