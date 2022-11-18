<script setup lang="ts" name="component-one">
import { useRouter } from 'vue-router'
import { userStore } from '@/stores/modules/user'
const routerInstance = useRouter()
const userInstance = userStore()

const test = (type: number) => {
  if (type === 1) {
    routerInstance.push({
      path: '/'
    })
  } else {
    userInstance.setToken(Math.random().toFixed(3) + '')
  }
}
</script>

<template>
  <div>
    <div>组件一{{ userInstance.getToken }}</div>
    <el-button @click="test(1)">测试</el-button>
    <el-button @click="test(2)">测试1</el-button>
  </div>
</template>

<style scoped></style>
