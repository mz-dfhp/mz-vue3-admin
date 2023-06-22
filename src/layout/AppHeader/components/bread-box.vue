<template>
  <el-breadcrumb separator="/" class="breadcrumb-box">
    <el-breadcrumb-item
      v-for="item in routeInstance.meta.breadcrumb"
      :key="item.name"
    >
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup lang="ts" name="Bread-box">
import { useRoute } from 'vue-router'
const routeInstance = useRoute()
</script>
<style scoped lang="scss">
@media screen and (max-width: 800px) {
  .breadcrumb-box {
    display: none;
  }
}
</style>
