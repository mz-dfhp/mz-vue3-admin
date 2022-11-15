<script setup lang="ts" name="AppMain">
import { keepAliveStore } from '@/stores/modules/keepAlive'
const keepAliveInstance = keepAliveStore()
const keepList = keepAliveInstance.getkeepAlive
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition mode="out-in" appear>
      <keep-alive :include="keepList">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
