<template>
  <div>
    <el-button @click="test(1)">去首页</el-button>
  </div>
</template>

<script setup lang="ts" name="component-one">
import { useRouter } from 'vue-router'
const routerInstance = useRouter()

const test = (type: number) => {
  if (type === 1) {
    routerInstance.push({
      path: '/'
    })
  }
}
</script>

<style scoped></style>
