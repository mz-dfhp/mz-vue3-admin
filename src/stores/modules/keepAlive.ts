import { defineStore } from 'pinia'
import store from '@/stores'

interface IKeepList {
  keepList: Array<string>
}
export const keepAliveStore = defineStore('keepAlive', {
  state(): IKeepList {
    return {
      keepList: ['Keep-one-page', 'Keep-two-page', 'Keep-three-page']
    }
  },
  getters: {
    getkeepAlive(state: IKeepList) {
      return state.keepList
    }
  },
  actions: {
    addkeepAlive(keepItem: string) {
      this.keepList = [...this.keepList, keepItem]
    }
  }
})
export const keepAliveStoreWithout = () => keepAliveStore(store)
