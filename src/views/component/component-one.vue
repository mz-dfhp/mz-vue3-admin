<template>
  <div>
    <div>组件一</div>
    <el-button @click="test(1)">去首页</el-button>
  </div>
</template>

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

<style scoped></style>
