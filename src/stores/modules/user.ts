import { defineStore } from 'pinia'
import store from '@/stores'
import { UserInfo } from '@/interface'

interface IUser {
  token: string
  userInfo: UserInfo
}
export const userStore = defineStore('user', {
  state(): IUser {
    return {
      token: '1212121',
      userInfo: {}
    }
  },
  getters: {
    getToken(state: IUser) {
      return state.token
    }
  },
  actions: {
    setToken(token: string) {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          this.token = token
          resolve()
        }, 2000)
      })
    },
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
    }
  }
})
export const userStoreWithout = () => userStore(store)
