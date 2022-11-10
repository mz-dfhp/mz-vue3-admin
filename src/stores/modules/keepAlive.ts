import { defineStore } from 'pinia'
import store from '@/stores'

interface IKeepList {
  keepList: []
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
    setkeepAlive(list: any) {
      this.keepList = list
    }
  }
})
export const keepAliveStoreWithout = () => keepAliveStore(store)
