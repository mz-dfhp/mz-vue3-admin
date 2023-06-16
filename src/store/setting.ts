import { defineStore } from 'pinia'
import store from '@/store'
import { computed, reactive, watch } from 'vue'
export interface ISettings {
  expansion: boolean
  themeColor: string
  dark: boolean
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
      dark: false,
      // 动画
      transitionName: 'fade-transform',
      // 标签风格
      tabName: 'card'
    })

    const getExpansion = computed(() => settingState.expansion)
    const getThemeColor = computed(() => settingState.themeColor)
    const getDark = computed(() => settingState.dark)
    const getTransitionName = computed(() => settingState.transitionName)
    const getTabName = computed(() => settingState.tabName)

    function setExpansion(flag: boolean) {
      settingState.expansion = flag
    }

    function setThemeColor(themeColor: string) {
      const el: HTMLElement = document.documentElement
      const colors: Record<string, number> = {
        '--el-color-primary': 1,
        '--el-color-primary-light-3': 0.7,
        '--el-color-primary-light-5': 0.5,
        '--el-color-primary-light-7': 0.3,
        '--el-color-primary-light-8': 0.2,
        '--el-color-primary-light-9': 0.1,
        '--el-color-primary-dark-2': 1
      }
      Object.keys(colors).forEach((item: string) => {
        el.style.setProperty(
          item,
          `${themeColor.replace(')', '')},${colors[item]})`
        )
      })
      el.style.setProperty('--el-text-color-secondary', themeColor)
      settingState.themeColor = themeColor
    }

    function setDark(dark: boolean) {
      settingState.dark = dark
      document.documentElement.classList.toggle('dark')
    }

    function setTransitionName(name: ISettings['transitionName']) {
      settingState.transitionName = name
    }

    function setTabName(name: ISettings['tabName']) {
      settingState.tabName = name
    }

    watch(
      () => settingState.themeColor,
      (value) => {
        value && setThemeColor(value)
      },
      {
        immediate: true
      }
    )

    return {
      settingState,
      getExpansion,
      getThemeColor,
      getDark,
      getTransitionName,
      getTabName,
      setExpansion,
      setThemeColor,
      setDark,
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
        'settingState.dark',
        'settingState.transitionName',
        'settingState.tabName'
      ]
    }
  }
)
export const settingStoreWithout = () => settingStore(store)
