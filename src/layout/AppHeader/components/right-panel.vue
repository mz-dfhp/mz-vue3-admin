<script setup lang="ts" name="RightPanel">
const changeDark = () => {
  document.documentElement.classList.toggle('dark')
}
</script>

<template>
  <div class="right-panel">
    <el-button @click="changeDark">主题切换</el-button>
  </div>
</template>

<style scoped lang="scss">
.right-panel {
  margin-left: auto;
}
</style>
