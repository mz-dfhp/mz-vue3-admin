<template>
  <div class="error-page" flex-center flex-col w100vw h100vh>
    <div class="text-30">404</div>
    <el-button type="primary" @click="toHome">去首页</el-button>
  </div>
</template>

<script setup lang="ts" name="Page404">
import { PageEnum } from '@/enmus/pageEnums'
import { useRouter } from 'vue-router'
const useRouterInstance = useRouter()

const toHome = () => {
  useRouterInstance.replace({
    path: PageEnum.ROOT_INDEX
  })
}
</script>
<style scoped lang="scss">
.error-page {
  background: var(--el-color-primary-light-3);
}
</style>
