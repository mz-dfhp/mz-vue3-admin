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
          v-model="settingState.color"
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
    <template #footer>
      <div style="flex: auto">
        <el-button @click="show = false">取消</el-button>
        <el-button type="primary" @click="confirmClick">确定</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts" name="AppSetting">
import { useThemeColor, useTransitionName, useTabName } from '@/hooks'
import { ref, reactive, watch, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const settingWidth = computed(() => (width.value < 600 ? '80%' : '400px'))

const { themeColor, setThemeColor } = useThemeColor()
const { transitionName, setTransitionName } = useTransitionName()
const { tabName, setTabName } = useTabName()
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
  '#c71585'
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
let settingState = reactive({
  color: themeColor.value,
  transitionName: transitionName.value,
  tabName: tabName.value
})

const confirmClick = () => {
  settingState.color && setThemeColor(settingState.color)
  settingState.transitionName && setTransitionName(settingState.transitionName)
  settingState.tabName && setTabName(settingState.tabName)
  show.value = false
}
watch(show, (e) => {
  if (!e) return
  settingState.color = themeColor.value
})
</script>

<style lang="scss" scoped></style>
