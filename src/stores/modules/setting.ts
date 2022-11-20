import { defineStore } from 'pinia'
import store from '@/stores'
import { setThemeColor } from '@/utils/setting'

interface ISettingList {
  expansion: boolean
  themeColor: string
  appDark: boolean
}
export const settingStore = defineStore('setting', {
  state(): ISettingList {
    return {
      expansion: false, //控制展开
      themeColor: '#409eff', // 主题色
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
    setAppDark(themeColor: boolean) {
      this.appDark = themeColor
      changeDark()
    }
  },
  persist: {
    storage: localStorage,
    paths: ['themeColor']
  }
})
const changeDark = () => {
  document.documentElement.classList.toggle('dark')
}
export const settingStoreWithout = () => settingStore(store)
