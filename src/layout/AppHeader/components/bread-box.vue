<script setup lang="ts" name="Bread-box">
import { Route } from '@/types/router'
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
const routeInstance = useRoute()
let breadList = ref<Route.breadcrumb[]>([])
breadList.value = routeInstance.meta.breadcrumb as Route.breadcrumb[]
watch(
  () => routeInstance.name,
  () => {
    breadList.value = routeInstance.meta.breadcrumb as Route.breadcrumb[]
  }
)
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in breadList" :key="item.name">{{
      item.title
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="scss"></style>
