<script setup lang="ts" name="Keep-one-page">
import { ref } from 'vue'
const input = ref('')
</script>
<template>
  <div>
    <div>缓存组件一</div>
    <el-input v-model="input" placeholder="Please input" />
  </div>
</template>
<style scoped></style>
