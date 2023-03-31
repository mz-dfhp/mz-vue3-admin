import { Router, RouteLocationRaw, RouteRecordName } from 'vue-router'
import { tabsStoreWithout } from '@/stores/modules/tabs'

/**
 * @description: router 扩展
 * @param {Router} router
 * @return {*}
 */
export function extensionRouter(router: Router) {
  const replace = router.replace
  const back = router.back

  router.replace = function (arg: RouteLocationRaw) {
    removeTabs(router.currentRoute.value.name)
    return replace.call(router, arg)
  }
  router.back = function () {
    removeTabs(router.currentRoute.value.name)
    back()
  }
}

/**
 * @description: 删除 tab
 * @param {RouteRecordName} name
 * @return {*}
 */
function removeTabs(name: RouteRecordName | null | undefined) {
  const tabsStoreInStance = tabsStoreWithout()
  tabsStoreInStance.closeCurrentTabs(name as string)
}
