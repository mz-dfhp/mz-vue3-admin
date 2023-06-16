import { computed, reactive } from 'vue'

import { defineStore } from 'pinia'
import store from '@/store'
import { UserInfo } from '@/interface'

interface IUser {
  token: string
  userInfo: UserInfo
}
const pid = 'STORE__USER'
export const userStore = defineStore(
  pid,
  () => {
    const userState = reactive<IUser>({
      token: '',
      userInfo: {
        permission: []
      }
    })
    const getToken = computed(() => userState.token)
    const getUserInfo = computed(() => userState.userInfo)

    function setToken(token: string) {
      return new Promise<void>((resolve) => {
        userState.token = token
        resolve()
      })
    }

    function setUserInfo(userInfo: UserInfo) {
      userState.userInfo = userInfo
    }

    return {
      userState,
      getToken,
      getUserInfo,
      setToken,
      setUserInfo
    }
  },
  {
    persist: {
      storage: localStorage,
      paths: ['userState.token']
    }
  }
)

export const userStoreWithout = () => userStore(store)
