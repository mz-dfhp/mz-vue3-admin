<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { throttle } from 'lodash-es'
import { useSettings } from '@/hooks/useSettings'

const globalResize = throttle(() => {
  const clientWidth = document.documentElement.clientWidth
  const { setExpansion } = useSettings()
  setExpansion(clientWidth < 800)
}, 500)

onMounted(() => {
  window.addEventListener('resize', globalResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', globalResize)
})
</script>
<template>
  <routerView />
</template>
<style scoped></style>
