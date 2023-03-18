<template>
  <div class="h100% flex items-center">
    <div @click="setExpansion(!expansion)" class="mr20px">
      <div
        cursor-pointer
        :class="expansion ? 'i-bi:text-left' : 'i-bi:text-right'"
      ></div>
    </div>
    <BreadBox />
    <RightPanel />
  </div>
</template>
<script setup lang="ts" name="AppHeader">
import { useExpansion } from '@/hooks'
import BreadBox from './components/bread-box.vue'
import RightPanel from './components/right-panel.vue'
const { expansion, setExpansion } = useExpansion()
</script>
<style scoped lang="scss"></style>
