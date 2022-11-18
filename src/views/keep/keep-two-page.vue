<script setup lang="ts" name="Keep-two-page">
import { ref } from 'vue'
const input = ref('')
</script>

<template>
  <div>
    <div>缓存组件二</div>
    <br />
    <br />
    <br />
    <el-input v-model="input" placeholder="Please input" />
  </div>
</template>

<style scoped></style>
