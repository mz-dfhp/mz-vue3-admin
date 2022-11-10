<script setup lang="ts">
import AppMenu from './AppMenu/index.vue'
import AppLogo from './AppLogo/index.vue'
import AppHeader from './AppHeader/index.vue'
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="common-aside">
        <AppLogo />
        <AppMenu />
      </el-aside>
      <el-container>
        <el-header><AppHeader /></el-header>
        <el-main class="common-main">
          <router-view v-slot="{ Component, route }">
            <transition mode="out-in" appear>
              <keep-alive :include="[]">
                <component :is="Component" :key="route.fullPath" />
              </keep-alive>
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="scss" name="layout">
.common-layout {
  min-height: 100%;
  .common-main {
    background: #f5f5f5;
  }
  .common-aside {
    height: 100vh;
    background-color: #001428;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
