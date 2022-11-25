<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { throttle } from 'lodash-es'
import { settingStore } from '@/stores/modules/setting'

const globalResize = throttle(() => {
  const clientWidth = document.documentElement.clientWidth
  settingStore().setExpansion(clientWidth < 800)
}, 500)

function settingApp() {
  const settingStoreInStance = settingStore()
  settingStoreInStance.getThemeColor &&
    settingStoreInStance.setThemeColor(settingStoreInStance.getThemeColor)
  settingStoreInStance.getAppDark && settingStoreInStance.setAppDark(true)
}

onMounted(() => {
  window.addEventListener('resize', globalResize)
  settingApp()
})
onUnmounted(() => {
  window.removeEventListener('resize', globalResize)
})
</script>
<template>
  <routerView />
</template>
<style scoped></style>
