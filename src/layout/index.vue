<template>
  <div class="common-layout h-100vh w-100vw overflow-hidden">
    <el-container h-100vh>
      <el-aside width="auto" class="common-aside">
        <AppLogo :expansion="expansion" />
        <AppMenu :expansion="expansion" />
      </el-aside>
      <!-- <div
        class="fixed bottom-0 right-0 left-0 top-0 z-10 bg-#000000 bg-opacity-80"
      ></div> -->
      <el-container>
        <el-header><AppHeader /></el-header>
        <AppTabs />
        <el-main class="common-main">
          <div class="wapper min-h-100% min-w-100%">
            <AppMain />
          </div>
          <AppSetting />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts" name="AppLayout">
import AppMenu from './AppMenu/index.vue'
import AppLogo from './AppLogo/index.vue'
import AppHeader from './AppHeader/index.vue'
import AppMain from './AppMain/index.vue'
import AppTabs from './AppTabs/index.vue'
import AppSetting from './AppSetting/index.vue'
import { useExpansion } from '@/hooks'
const { expansion } = useExpansion()
</script>
<style scoped lang="scss" name="layout">
.common-layout {
  min-height: 100%;
  .common-main {
    background: $mainColor;
  }
  /* .aside-modal {
  }
  @media screen and (max-width: 440px) {
    .common-aside {
      position: fixed;
      left: 0;
      top: 0;
      background: #fff;
      z-index: 11;
      height: 100vh;
      .common-menu:not(.el-menu--collapse) {
        width: 80vw !important;
      }
    }
  } */
}
</style>
