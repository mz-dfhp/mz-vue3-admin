<template>
  <div class="h-100% w-100% overflow-hidden">
    <el-container class="h-100%!">
      <el-aside width="auto" class="overflow-hidden! h-100%!">
        <AppMenu :expansion="expansion" />
      </el-aside>
      <el-container>
        <el-header>
          <AppHeader />
        </el-header>
        <AppTabs />
        <el-main class="bg-[var(--bgc)] p-0!">
          <el-scrollbar class="p-x-[var(--el-main-padding)] box-border">
            <div
              class="min-h-100% w-100% overflow-x-hidden p-y-[var(--el-main-padding)]"
            >
              <AppMain />
            </div>
            <AppSetting />
          </el-scrollbar>
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
import { useSettings } from '@/hooks'

const { expansion } = useSettings()
</script>
<style scoped lang="scss" name="layout"></style>
