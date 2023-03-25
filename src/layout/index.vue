<template>
  <div class="h-100vh w-100vw overflow-hidden">
    <el-container h-100vh>
      <el-aside width="auto" height="100%" class="overflow-hidden!">
        <AppMenu :expansion="expansion" />
      </el-aside>
      <el-container>
        <el-header>
          <AppHeader />
        </el-header>
        <AppTabs />
        <el-main class="bg-[var(--bgc)]">
          <div class="min-h-100% min-w-100%">
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
import AppHeader from './AppHeader/index.vue'
import AppMain from './AppMain/index.vue'
import AppTabs from './AppTabs/index.vue'
import AppSetting from './AppSetting/index.vue'
import { useExpansion } from '@/hooks'
const { expansion } = useExpansion()
</script>
<style scoped lang="scss" name="layout"></style>
