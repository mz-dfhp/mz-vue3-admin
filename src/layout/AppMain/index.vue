<template>
  <router-view v-slot="{ Component, route }">
    <transition mode="out-in" appear>
      <keep-alive :include="keepList">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts" name="AppMain">
import { keepAliveStore } from '@/stores/modules/keepAlive'
import { computed } from 'vue'
const keepAliveInstance = keepAliveStore()
const keepList = computed(() => keepAliveInstance.getkeepAlive)
</script>

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
