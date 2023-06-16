<template>
  <div class="h100% flex items-center">
    <div @click="setExpansion(!expansion)" class="mr20px">
      <div
        cursor-pointer
        :class="expansion ? 'i-bi:text-indent-left' : 'i-bi:text-indent-right'"
      ></div>
    </div>
    <BreadBox />
    <RightPanel />
  </div>
</template>
<script setup lang="ts" name="AppHeader">
import BreadBox from './components/bread-box.vue'
import RightPanel from './components/right-panel.vue'
import { useSettings } from '@/hooks'

const { expansion, setExpansion } = useSettings()
</script>
<style scoped lang="scss"></style>
