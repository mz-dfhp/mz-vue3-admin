/*
 * @Author: lc 486836332@qq.com
 * @Date: 2023-03-20 13:55:18
 * @LastEditors: lc 486836332@qq.com
 * @LastEditTime: 2023-07-21 17:19:48
 * @Description: useRefresh
 */
import { PageEnum } from '@/enmus'
import { useRouter, useRoute } from 'vue-router'

export function useRefresh() {
  const routerInstance = useRouter()
  const routeInstance = useRoute()
  const refresh = () => {
    routerInstance.push({
      path: PageEnum.ROOT_Redirect + routeInstance.fullPath,
      query: routeInstance.query,
      params: routeInstance.params
    })
  }
  return { refresh }
}
