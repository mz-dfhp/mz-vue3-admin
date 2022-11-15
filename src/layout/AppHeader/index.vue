<script setup lang="ts" name="AppHeader">
import BreadBox from './components/bread-box.vue'
import RightPanel from './components/right-panel.vue'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@vicons/antd'
import { settingStore } from '@/stores/modules/setting'
import { computed } from 'vue'
const settingStoreInstance = settingStore()
const changeExpansion = () => {
  settingStoreInstance.setExpansion(!settingStoreInstance.expansion)
}
const expansion = computed(() => settingStoreInstance.expansion)
</script>

<template>
  <div class="app-header">
    <div @click="changeExpansion" class="change-expansion">
      <BaseIcon v-show="!expansion">
        <MenuFoldOutlined />
      </BaseIcon>
      <BaseIcon>
        <MenuUnfoldOutlined v-show="expansion" />
      </BaseIcon>
    </div>
    <BreadBox />
    <RightPanel />
  </div>
</template>

<style scoped lang="scss">
.app-header {
  height: 100%;
  display: flex;
  align-items: center;
  .change-expansion {
    padding-right: 20px;
  }
}
</style>
