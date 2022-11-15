import { defineStore } from 'pinia'
import store from '@/stores'
import { setThemeColor } from '@/utils/setting'

interface ISettingList {
  expansion: boolean
  themeColor: string
}
export const settingStore = defineStore('setting', {
  state(): ISettingList {
    return {
      expansion: false,
      themeColor: 'pink'
    }
  },
  getters: {
    getExpansion(state: ISettingList) {
      return state.expansion
    },
    getThemeColor(state) {
      return state.themeColor
    }
  },
  actions: {
    setExpansion(flag: boolean) {
      this.expansion = flag
    },
    setThemeColor(themeColor: string) {
      setThemeColor(themeColor)
      this.themeColor = themeColor
    }
  }
})
// setThemeColor('pink')
export const settingStoreWithout = () => settingStore(store)
