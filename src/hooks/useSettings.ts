import { storeToRefs } from 'pinia'
import { settingStore } from '@/store/modules/setting'
/**
 * 暗黑模式
 * @returns
 */
export function useDark() {
  const settingStoreInstance = settingStore()
  const { getAppDark: dark } = storeToRefs(settingStoreInstance)
  function setDark(flag: boolean) {
    settingStoreInstance.setAppDark(flag)
    document.documentElement.classList.toggle('dark')
  }
  return { dark, setDark }
}

/**
 * 主题色
 * @returns
 */
export function useThemeColor() {
  type TColor = {
    [propName: string]: string | number
  }
  const settingStoreInstance = settingStore()
  const { getThemeColor: themeColor } = storeToRefs(settingStoreInstance)
  function setThemeColor(color: string) {
    settingStoreInstance.setThemeColor(color)
    const el: HTMLElement = document.documentElement
    const colors: TColor = {
      '--el-color-primary': 1,
      '--el-color-primary-light-3': 0.7,
      '--el-color-primary-light-5': 0.5,
      '--el-color-primary-light-7': 0.3,
      '--el-color-primary-light-8': 0.2,
      '--el-color-primary-light-9': 0.1,
      '--el-color-primary-dark-2': 1
    }
    Object.keys(colors).forEach((item: string) => {
      el.style.setProperty(item, `${color.replace(')', '')},${colors[item]})`)
    })
    el.style.setProperty('--el-text-color-secondary', color)
  }
  return { themeColor, setThemeColor }
}

/**
 * 侧边栏展开
 * @returns
 */
export function useExpansion() {
  const settingStoreInstance = settingStore()
  const { getExpansion: expansion } = storeToRefs(settingStoreInstance)
  const setExpansion = settingStoreInstance.setExpansion
  return { expansion, setExpansion }
}

/**
 * 动画
 * @returns
 */
export function useTransitionName() {
  const settingStoreInstance = settingStore()
  const { getTransitionName: transitionName } =
    storeToRefs(settingStoreInstance)
  const setTransitionName = settingStoreInstance.setTransitionName
  return { transitionName, setTransitionName }
}

/**
 * 动画
 * @returns
 */
export function useTabName() {
  const settingStoreInstance = settingStore()
  const { getTabName: tabName } = storeToRefs(settingStoreInstance)
  const setTabName = settingStoreInstance.setTabName
  return { tabName, setTabName }
}
