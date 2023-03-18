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
