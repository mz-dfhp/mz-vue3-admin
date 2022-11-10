<script setup lang="ts" name="AppHeader">
const changeDark = () => {
  document.documentElement.classList.toggle('dark')
}
</script>

<template>
  <div class="app-header">
    <el-button>折叠</el-button>
    <el-button @click="changeDark">切换</el-button>
  </div>
</template>

<style scoped lang="scss">
.app-header {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
