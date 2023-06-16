<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { throttle } from 'lodash-es'
import { useSettings } from '@/hooks/useSettings'

const globalResize = throttle(() => {
  const clientWidth = document.documentElement.clientWidth
  const { setExpansion } = useSettings()
  setExpansion(clientWidth < 800)
}, 500)

function settingApp() {
  const { dark, setDark } = useSettings()
  dark.value && setDark(true)
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
