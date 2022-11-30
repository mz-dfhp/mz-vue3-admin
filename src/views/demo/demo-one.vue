<script setup lang="ts" name="Demo-one">
import { useRouter } from 'vue-router'
const routerInstance = useRouter()

const toPage = (name: number) => {
  routerInstance.push({
    path: `/${name}`
  })
}
</script>

<template>
  <div>
    <el-card shadow="hover">
      <el-button type="danger" @click="toPage(404)">404</el-button>
    </el-card>
    <br />
    <el-card shadow="hover">
      <el-button type="warning" @click="toPage(403)">403</el-button>
    </el-card>
  </div>
</template>
<style scoped></style>
