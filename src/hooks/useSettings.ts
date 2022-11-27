import { ref } from 'vue'
import { settingStore } from '@/stores/modules/setting'

/**
 * 修改暗黑模式
 * @returns
 */
export function useDark() {
  const settingStoreInstance = settingStore()
  const dark = ref(settingStoreInstance.getAppDark)
  function setDark(flag: boolean) {
    dark.value = flag
    settingStoreInstance.setAppDark(flag)
    document.documentElement.classList.toggle('dark')
  }
  return { dark, setDark }
}

/**
 * 修改主题色
 * @returns
 */
export function useThemeColor() {
  type TColor = {
    [propName: string]: string | number
  }
  const settingStoreInstance = settingStore()
  const themeColor = ref(settingStoreInstance.getThemeColor)
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
  }
  return { themeColor, setThemeColor }
}

/**
 * 修改侧边栏展开
 * @returns
 */
export function useExpansion() {
  const settingStoreInstance = settingStore()
  const expansion = ref(settingStoreInstance.getExpansion)
  function setExpansion(flag: boolean) {
    expansion.value = flag
    settingStoreInstance.setExpansion(flag)
  }
  return { expansion, setExpansion }
}
