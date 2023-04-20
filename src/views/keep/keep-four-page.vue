<script setup lang="ts" name="Keep-four-page">
import { ref } from 'vue'
import { keepAliveStore } from '@/store/modules/keepAlive'
const keepAliveStoreInstance = keepAliveStore()
const input = ref('')
const removeKeep = () => {
  keepAliveStoreInstance.removekeepAlive('Keep-four-page')
}
</script>
<template>
  <div>
    <el-card shadow="hover">
      <div>缓存组件四</div>
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
    </el-card>
  </div>
</template>
<style scoped></style>
