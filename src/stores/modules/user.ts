import { defineStore } from 'pinia'
import store from '@/stores'
import { UserInfo } from '@/interface'

interface IUser {
  token: string
  userInfo: UserInfo
}
const pid = 'STORE__USER'
export const userStore = defineStore(pid, {
  state: (): IUser => ({
    token: '',
    userInfo: {
      permission: []
    }
  }),
  getters: {
    getToken(state: IUser) {
      return state.token
    },
    getUserInfo(state: IUser) {
      return state.userInfo
    }
  },
  actions: {
    setToken(token: string) {
      return new Promise<void>((resolve) => {
        this.token = token
        resolve()
      })
    },
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
    }
  },
  persist: {
    storage: localStorage,
    paths: ['token']
  }
})

export const userStoreWithout = () => userStore(store)
