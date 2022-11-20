import { throttle } from 'lodash-es'
import { settingStore } from '@/stores/modules/setting'

function globalResize() {
  const clientWidth = document.documentElement.clientWidth
  settingStore().setExpansion(clientWidth < 800)
  console.log('resize')
}

export default () => {
  window.addEventListener('resize', throttle(globalResize, 500))
}
