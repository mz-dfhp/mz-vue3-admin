<template>
  <router-view v-slot="{ Component, route }">
    <transition mode="out-in" appear :name="transitionName">
      <keep-alive :include="keepList">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts" name="AppMain">
import { keepAliveStore } from '@/stores/modules/keepAlive'
import { settingStore } from '@/stores/modules/setting'
import { computed } from 'vue'
const keepAliveInstance = keepAliveStore()
const settingStoreInstance = settingStore()

const keepList = computed(() => keepAliveInstance.getkeepAlive)
const transitionName = computed(() => settingStoreInstance.getTransitionName)
</script>

<style scoped lang="scss"></style>
