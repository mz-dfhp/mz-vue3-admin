<script setup lang="ts" name="RightPanel">
import { userStore } from '@/stores/modules/user'

const userInfo = userStore().getUserInfo
const changeDark = () => {
  document.documentElement.classList.toggle('dark')
}
const handleCommand = (command: string | number | object) => {
  if (command === 'login-out') {
    window.localStorage.clear()
    window.location.reload()
  }
}
</script>

<template>
  <div class="right-panel">
    <el-button @click="changeDark">主题切换</el-button>
    <el-dropdown @command="handleCommand">
      <img
        width="36"
        height="36"
        style="border-radius: 50%"
        :src="userInfo.avatar"
      />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="login-out">退出登录</el-dropdown-item>
          <el-dropdown-item command="more">暂未添加更多</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped lang="scss">
.right-panel {
  margin-left: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
