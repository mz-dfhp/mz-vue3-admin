<script setup lang="ts">
import AppMenu from './AppMenu/index.vue'
import AppLogo from './AppLogo/index.vue'
import AppHeader from './AppHeader/index.vue'
import AppMain from './AppMain/index.vue'
import AppTabs from './AppTabs/index.vue'
import { settingStore } from '@/stores/modules/setting'
import { computed } from 'vue'
const settingStoreInstance = settingStore()
const expansion = computed(() => settingStoreInstance.getExpansion)
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto" class="common-aside">
        <AppLogo :expansion="expansion" />
        <AppMenu :expansion="expansion" />
      </el-aside>
      <el-container>
        <el-header><AppHeader /></el-header>
        <AppTabs />
        <el-main class="common-main">
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="scss" name="layout">
.common-layout {
  min-height: 100%;
  .common-main {
    background: $color;
  }
  .common-aside {
    height: 100vh;
  }
}
</style>
