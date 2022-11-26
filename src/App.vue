<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { throttle } from 'lodash-es'
import { useThemeColor, useExpansion, useDark } from '@/hooks'
const globalResize = throttle(() => {
  const clientWidth = document.documentElement.clientWidth
  const { setExpansion } = useExpansion()
  setExpansion(clientWidth < 800)
}, 500)

function settingApp() {
  const { themeColor, setThemeColor } = useThemeColor()
  const { dark, setDark } = useDark()
  themeColor && setThemeColor(themeColor.value)
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
