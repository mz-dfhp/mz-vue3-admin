<script setup lang="ts" name="Keep-one">
import { useRouter } from 'vue-router'
const routerInstance = useRouter()
const goBack = () => {
  routerInstance.replace({ name: 'Keep-one' })
}
</script>
<template>
  <div>
    <el-card shadow="hover">
      <div>缓存组件一(详情页)</div>
    </el-card>
    <br />
    <el-card shadow="hover">
      <div>看左侧菜单</div>
    </el-card>
    <br />
    <el-card shadow="hover">
      <el-button type="primary" @click="goBack">返回</el-button>
    </el-card>
  </div>
</template>
<style scoped></style>
