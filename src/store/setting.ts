import { defineStore } from 'pinia'
import store from '@/store'
import { computed, reactive } from 'vue'

export interface ISettings {
  expansion: boolean
  themeColor: string
  appDark: boolean
  transitionName: 'fade' | 'slide-fade' | 'zoom' | 'fade-transform'
  tabName: 'card' | 'etherealize'
}
const pid = 'STORE__SETTING'
export const settingStore = defineStore(
  pid,
  () => {
    const settingState = reactive<ISettings>({
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
    })

    const getExpansion = computed(() => settingState.expansion)
    const getThemeColor = computed(() => settingState.themeColor)
    const getAppDark = computed(() => settingState.appDark)
    const getTransitionName = computed(() => settingState.transitionName)
    const getTabName = computed(() => settingState.tabName)

    function setExpansion(flag: boolean) {
      settingState.expansion = flag
    }

    function setThemeColor(themeColor: string) {
      settingState.themeColor = themeColor
    }

    function setAppDark(dark: boolean) {
      settingState.appDark = dark
    }

    function setTransitionName(name: ISettings['transitionName']) {
      settingState.transitionName = name
    }

    function setTabName(name: ISettings['tabName']) {
      settingState.tabName = name
    }
    return {
      settingState,
      getExpansion,
      getThemeColor,
      getAppDark,
      getTransitionName,
      getTabName,
      setExpansion,
      setThemeColor,
      setAppDark,
      setTransitionName,
      setTabName
    }
  },
  {
    persist: {
      storage: localStorage,
      paths: [
        'settingState.expansion',
        'settingState.themeColor',
        'settingState.appDark',
        'settingState.transitionName',
        'settingState.tabName'
      ]
    }
  }
)
export const settingStoreWithout = () => settingStore(store)
