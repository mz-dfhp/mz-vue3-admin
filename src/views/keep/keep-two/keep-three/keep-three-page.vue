<script setup lang="ts" name="Keep-three-page">
import { ref } from 'vue'
const input = ref('')
</script>
<template>
  <div>
    <el-card shadow="hover">
      <div>缓存组件三</div>
    </el-card>
    <br />
    <el-card shadow="hover">
      <el-input v-model="input" placeholder="Please input" />
    </el-card>
  </div>
</template>
<style scoped></style>
