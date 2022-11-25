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
      token: '',
      userInfo: {
        permission: []
      }
    }
  },
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
