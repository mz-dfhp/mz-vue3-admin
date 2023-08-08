/*
 * @Author: lc 486836332@qq.com
 * @Date: 2023-04-03 09:27:19
 * @LastEditors: lc 486836332@qq.com
 * @LastEditTime: 2023-08-08 18:50:47
 * @Description: sys setting
 */
import { storeToRefs } from 'pinia'
import { settingStore } from '@/store/setting'
import { nextTick } from 'vue'
import { useDark } from '@vueuse/core'

export function useSettings() {
  const settingStoreInstance = settingStore()
  const {
    settingState,
    getExpansion: expansion,
    getThemeColor: themeColor,
    getTransitionName: transitionName,
    getTabName: tabName
  } = storeToRefs(settingStoreInstance)

  const isDark = useDark()

  function toggleDark(event: MouseEvent) {
    const isAppearanceTransition =
      (document as any).startViewTransition &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isAppearanceTransition) {
      isDark.value = !isDark.value
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )
    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(async () => {
      isDark.value = !isDark.value
      await nextTick()
    })
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ]
      document.documentElement.animate(
        {
          clipPath: isDark.value ? [...clipPath].reverse() : clipPath
        },
        {
          duration: 400,
          easing: 'ease-out',
          pseudoElement: isDark.value
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)'
        }
      )
    })
  }

  return {
    settingState,
    expansion,
    themeColor,
    transitionName,
    tabName,
    isDark,
    setExpansion: settingStoreInstance.setExpansion,
    setThemeColor: settingStoreInstance.setThemeColor,
    setTransitionName: settingStoreInstance.setTransitionName,
    setTabName: settingStoreInstance.setTabName,
    toggleDark
  }
}
