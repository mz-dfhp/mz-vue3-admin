<template>
  <div class="mla flex justify-around items-center">
    <div class="p-x-30px flex justify-around items-center mini-operation">
      <div
        cursor-pointer
        m-l-15px
        hover-scale-120
        transition-all
        class="i-bi-github"
        @click="github"
      ></div>
      <div
        m-l-20px
        cursor-pointer
        hover-scale-120
        transition-all
        :class="
          isFullscreen ? 'i-bi:fullscreen-exit' : 'i-bi:arrows-angle-expand'
        "
        @click="toggle"
      ></div>
      <div
        cursor-pointer
        m-l-20px
        hover-scale-120
        transition-all
        :class="dark ? 'i-bi:moon' : 'i-bi:sun'"
        @click="setDark(!dark)"
      ></div>
      <div
        cursor-pointer
        m-l-20px
        hover-scale-120
        transition-all
        class="i-bi-arrow-repeat"
        @click="refresh"
      ></div>
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
import { useDark } from '@/hooks'
import { useFullscreen } from '@vueuse/core'
import { userStore } from '@/store/user'
import { useRefresh } from '@/hooks'

const { refresh } = useRefresh()
const { dark, setDark } = useDark()
const { isFullscreen, toggle } = useFullscreen()

const userInfo = userStore().getUserInfo

const handleCommand = (command: string | number | object) => {
  if (command === 'login-out') {
    window.localStorage.clear()
    window.location.reload()
  }
}

const github = () => {
  window.open('https://github.com/mz-dfhp/mz-vue3-admin')
}
</script>

<style scoped lang="scss">
@media screen and (max-width: 440px) {
  .mini-operation {
    display: none;
  }
}
</style>
