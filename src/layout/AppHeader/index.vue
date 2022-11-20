<template>
  <div class="h100% flex items-center">
    <div @click="changeExpansion" class="mr20px">
      <div
        :class="
          expansion ? 'i-zondicons-align-left' : 'i-zondicons-align-right'
        "
      ></div>
    </div>
    <BreadBox />
    <RightPanel />
  </div>
</template>
<script setup lang="ts" name="AppHeader">
import BreadBox from './components/bread-box.vue'
import RightPanel from './components/right-panel.vue'
import { settingStore } from '@/stores/modules/setting'
import { computed } from 'vue'
const settingStoreInstance = settingStore()
const changeExpansion = () => {
  settingStoreInstance.setExpansion(!settingStoreInstance.expansion)
}
const expansion = computed(() => settingStoreInstance.expansion)
</script>
<style scoped lang="scss"></style>
