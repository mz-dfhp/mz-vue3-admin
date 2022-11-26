<template>
  <div class="mla flex justify-around items-center">
    <div class="p-x-30px flex justify-around items-center">
      <div
        m-r-10px
        cursor-pointer
        class="i-zondicons-screen-full"
        :class="full ? '1' : '2'"
        @click="changeFullScreen"
      ></div>
      <el-switch
        :model-value="dark"
        @change="(e: boolean) => setDark(e)"
        inline-prompt
        :active-icon="vnode1"
        :inactive-icon="vnode2"
      />
    </div>
    <el-dropdown @command="handleCommand">
      <img
        width="36"
        height="36"
        class="rounded-full cursor-pointer"
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
import { useDark, useFullScreen } from '@/hooks'
import { userStore } from '@/stores/modules/user'
import { h } from 'vue'

const { dark, setDark } = useDark()

const { full, changeFullScreen } = useFullScreen()

const userInfo = userStore().getUserInfo

const vnode1 = h('div', { class: 'i-zondicons-brightness-up' })
const vnode2 = h('div', { className: ' i-zondicons-light-bulb' })

const handleCommand = (command: string | number | object) => {
  if (command === 'login-out') {
    window.localStorage.clear()
    window.location.reload()
  }
}
</script>

<style scoped lang="scss"></style>
