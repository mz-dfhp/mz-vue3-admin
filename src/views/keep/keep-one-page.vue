<script setup lang="ts" name="Keep-one">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { keepAliveStore } from '@/stores/modules/keepAlive'

const routerInstance = useRouter()
const goToInfoPage = () => {
  routerInstance.push({
    name: 'Keep-one-info',
    query: {
      id: 1
    }
  })
}
const keepAliveStoreInstance = keepAliveStore()
const input = ref('')
const removeKeep = () => {
  keepAliveStoreInstance.removekeepAlive('Keep-one')
}
</script>
<template>
  <div>
    <el-card shadow="hover">
      <div>缓存组件一</div>
    </el-card>
    <br />
    <el-card shadow="hover">
      <el-input v-model="input" placeholder="Please input" />
    </el-card>
    <br />
    <el-card shadow="hover">
      <el-button type="primary" @click="removeKeep"
        >删除缓存下次进来不会缓存</el-button
      >
      <el-button type="primary" @click="goToInfoPage"
        >去详情页面并携带参数</el-button
      ></el-card
    >
  </div>
</template>
<style scoped></style>
