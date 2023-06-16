/*
 * @Author: lc 486836332@qq.com
 * @Date: 2023-04-03 09:27:19
 * @LastEditors: lc 486836332@qq.com
 * @LastEditTime: 2023-06-16 14:37:15
 * @Description: sys setting
 */
import { storeToRefs } from 'pinia'
import { settingStore } from '@/store/setting'

export function useSettings() {
  const settingStoreInstance = settingStore()
  const {
    settingState,
    getExpansion: expansion,
    getThemeColor: themeColor,
    getDark: dark,
    getTransitionName: transitionName,
    getTabName: tabName
  } = storeToRefs(settingStoreInstance)

  return {
    settingState,
    expansion,
    dark,
    themeColor,
    transitionName,
    tabName,
    setExpansion: settingStoreInstance.setExpansion,
    setThemeColor: settingStoreInstance.setThemeColor,
    setDark: settingStoreInstance.setDark,
    setTransitionName: settingStoreInstance.setTransitionName,
    setTabName: settingStoreInstance.setTabName
  }
}
