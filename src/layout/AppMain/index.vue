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
import { storeToRefs } from 'pinia'
import { keepAliveStore } from '@/store/keepAlive'
import { settingStore } from '@/store/setting'

const { keepList } = storeToRefs(keepAliveStore())
const { getTransitionName: transitionName } = storeToRefs(settingStore())
</script>

<style scoped lang="scss"></style>
