<template>
  <Teleport to="body">
    <div
      position="fixed"
      class="right-0 top-50% translate-y--50% p10px bg-[var(--el-color-primary-light-3)] rounded-l-xl"
    >
      <div
        @click="showSetting"
        class="hover-animate-spin i-bi:gear-fill h-25px w-25px cursor-pointer bg-white"
      ></div>
    </div>
  </Teleport>
  <el-drawer
    v-model="show"
    destroy-on-close
    :size="settingWidth"
    title="项目配置"
  >
    <el-form label-position="top">
      <el-form-item label="主题色">
        <el-color-picker
          color-format="rgb"
          v-model="settingState.themeColor"
          :predefine="predefineColors"
        />
      </el-form-item>
      <el-form-item label="切换动画">
        <el-select v-model="settingState.transitionName" placeholder="请选择">
          <el-option
            v-for="item in transitionList"
            :key="item.name"
            :label="item.title"
            :value="item.name"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="标签风格">
        <el-select v-model="settingState.tabName" placeholder="请选择">
          <el-option
            v-for="item in tabList"
            :key="item.name"
            :label="item.title"
            :value="item.name"
          />
        </el-select>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script setup lang="ts" name="AppSetting">
import { ref, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

import { settingStore } from '@/store/setting'

const { width } = useWindowSize()
const settingWidth = computed(() => (width.value < 600 ? '80%' : '400px'))

const show = ref<boolean>(false)
const showSetting = () => {
  show.value = true
}

const predefineColors = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  '#0e0c95'
]
const transitionList = [
  {
    name: 'fade',
    title: '淡出'
  },
  {
    name: 'slide-fade',
    title: '幻灯片'
  },
  {
    name: 'fade-transform',
    title: '滑动'
  },
  {
    name: 'zoom',
    title: '缩放'
  }
]
const tabList = [
  {
    name: 'card',
    title: '卡片'
  },
  {
    name: 'etherealize',
    title: '灵动'
  }
]
const settingState = computed(() => settingStore().settingState)
</script>

<style lang="scss" scoped></style>
