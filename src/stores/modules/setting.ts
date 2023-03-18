import { defineStore } from 'pinia'
import store from '@/stores'

export interface ISettings {
  expansion: boolean
  themeColor: string
  appDark: boolean
  transitionName: string
}
const pid = 'STORE__SETTING'
export const settingStore = defineStore(pid, {
  state: (): ISettings => ({
    expansion: false, //控制展开
    themeColor: 'rgb(64,158,255)', // 主题色
    appDark: false, //暗黑模式
    transitionName: 'slide-fade' // 动画
  }),
  getters: {
    getExpansion(state: ISettings) {
      return state.expansion
    },
    getThemeColor(state) {
      return state.themeColor
    },
    getAppDark(state) {
      return state.appDark
    },
    getTransitionName(state) {
      return state.transitionName
    }
  },
  actions: {
    setExpansion(flag: boolean) {
      this.expansion = flag
    },
    setThemeColor(themeColor: string) {
      this.themeColor = themeColor
    },
    setAppDark(dark: boolean) {
      this.appDark = dark
    },
    setTransitionName(name: string) {
      this.transitionName = name
    }
  },
  persist: {
    storage: localStorage,
    paths: ['expansion', 'themeColor', 'appDark', 'transitionName']
  }
})

export const settingStoreWithout = () => settingStore(store)
