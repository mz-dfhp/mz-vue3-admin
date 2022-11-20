<template>
  <el-breadcrumb separator="/" class="breadcrumb-box">
    <el-breadcrumb-item v-for="item in breadList" :key="item.name">{{
      item.title
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
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
<style scoped lang="scss">
@media screen and (max-width: 800px) {
  .breadcrumb-box {
    display: none;
  }
}
</style>
