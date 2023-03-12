import { onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElEmpty } from 'element-plus'
import 'element-plus/es/components/empty/style/css'
export default {
  setup() {
    const routeInstance = useRoute()
    const routerInstance = useRouter()
    onBeforeMount(() => {
      const { params, query } = routeInstance
      const { path } = params
      debugger
      routerInstance.replace({
        path: '/' + (Array.isArray(path) ? path.join('/') : path),
        query
      })
    })
    return () => `<${ElEmpty}/>`
  }
}
