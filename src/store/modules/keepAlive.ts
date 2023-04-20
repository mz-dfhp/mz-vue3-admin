import { defineStore } from 'pinia'
import store from '@/store'

interface IKeepList {
  keepList: Array<string>
}
const pid = 'STORE__KEEPALIVE'
export const keepAliveStore = defineStore(pid, {
  state: (): IKeepList => ({
    keepList: []
  }),
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
