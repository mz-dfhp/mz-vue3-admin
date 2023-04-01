import { defineStore } from 'pinia'
import store from '@/stores'

export interface ISettings {
  expansion: boolean
  themeColor: string
  appDark: boolean
  transitionName: 'fade' | 'slide-fade' | 'zoom' | 'fade-transform'
  tabName: 'card' | 'etherealize'
}
const pid = 'STORE__SETTING'
export const settingStore = defineStore(pid, {
  state: (): ISettings => ({
    //控制展开
    expansion: false,
    // 主题色
    themeColor: 'rgb(14, 12, 149)',
    //暗黑模式
    appDark: false,
    // 动画
    transitionName: 'fade-transform',
    // 标签风格
    tabName: 'card'
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
    },
    getTabName(state) {
      return state.tabName
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
    setTransitionName(name: ISettings['transitionName']) {
      this.transitionName = name
    },
    setTabName(name: ISettings['tabName']) {
      this.tabName = name
    }
  },
  persist: {
    storage: localStorage,
    paths: ['expansion', 'themeColor', 'appDark', 'transitionName', 'tabName']
  }
})

export const settingStoreWithout = () => settingStore(store)
