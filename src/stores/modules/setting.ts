import { defineStore } from 'pinia'
import store from '@/stores'
import { setThemeColor } from '@/utils/setting'

export interface ISettingList {
  expansion: boolean
  themeColor: string
  appDark: boolean
}
const pid = 'STORE__SETTING'
export const settingStore = defineStore(pid, {
  state(): ISettingList {
    return {
      expansion: false, //控制展开
      themeColor: 'rgb(64,158,255)', // 主题色
      appDark: false //暗黑模式
    }
  },
  getters: {
    getExpansion(state: ISettingList) {
      return state.expansion
    },
    getThemeColor(state) {
      return state.themeColor
    },
    getAppDark(state) {
      return state.appDark
    }
  },
  actions: {
    setExpansion(flag: boolean) {
      this.expansion = flag
    },
    setThemeColor(themeColor: string) {
      setThemeColor(themeColor)
      this.themeColor = themeColor
    },
    setAppDark(dark: boolean) {
      changeDark()
      this.appDark = dark
    }
  },
  persist: {
    storage: localStorage,
    paths: ['appDark', 'themeColor']
  }
})

const changeDark = () => {
  document.documentElement.classList.toggle('dark')
}
export const settingStoreWithout = () => settingStore(store)
