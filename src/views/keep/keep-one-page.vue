<script setup lang="ts" name="Keep-one">
import { ref } from 'vue'
import { keepAliveStore } from '@/stores/modules/keepAlive'
const keepAliveStoreInstance = keepAliveStore()
const input = ref('')
const removeKeep = () => {
  keepAliveStoreInstance.removekeepAlive('Keep-one')
}
</script>
<template>
  <div>
    <div>缓存组件一</div>
    <br />
    <br />
    <br />
    <el-input v-model="input" placeholder="Please input" />
    <br />
    <br />
    <br />
    <el-button type="primary" @click="removeKeep"
      >删除缓存下次进来不会缓存</el-button
    >
  </div>
</template>
<style scoped></style>
