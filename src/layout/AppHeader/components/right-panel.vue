<template>
  <div class="mla flex justify-around items-center">
    <div class="p-x-30px flex justify-around items-center">
      <div class="i-fa-solid-abacus"></div>
      <el-switch
        v-model="appTheme"
        inline-prompt
        :active-icon="vnode1"
        :inactive-icon="vnode2"
      />
    </div>
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
<script setup lang="ts" name="RightPanel">
import { settingStore } from '@/stores/modules/setting'
import { userStore } from '@/stores/modules/user'
import { computed, h } from 'vue'
const settingStoreInstance = settingStore()
const userInfo = userStore().getUserInfo

const vnode1 = h(
  'div', // type
  { class: 'i-zondicons-brightness-up' }
)
const vnode2 = h(
  'div', // type
  { className: 'i-zondicons-brightness-down' }
)

const handleCommand = (command: string | number | object) => {
  if (command === 'login-out') {
    window.localStorage.clear()
    window.location.reload()
  }
}
const appTheme = computed({
  get: () => settingStoreInstance.getAppDark,
  set: (val) => {
    settingStoreInstance.setAppDark(val)
  }
})
</script>

<style scoped lang="scss"></style>
