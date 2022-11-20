<template>
  <Teleport to="body">
    <div position="fixed" class="right-0 top-50% translate-y--50% p10px">
      <div
        @click="showSetting"
        class="hover-animate-spin i-zondicons-cog h-25px w-25px cursor-pointer"
      ></div>
    </div>
  </Teleport>
  <el-drawer v-model="show" destroy-on-close size="25%" title="项目配置">
    <el-divider>
      主题色 <el-color-picker v-model="color" :predefine="predefineColors"
    /></el-divider>
  </el-drawer>
</template>

<script setup lang="ts" name="AppSetting">
import { computed, ref } from 'vue'
import { settingStore } from '@/stores/modules/setting'
const settingStoreInstance = settingStore()
const show = ref<boolean>(false)
const showSetting = () => {
  show.value = true
}
const color = computed({
  get: () => settingStoreInstance.getThemeColor,
  set: (e) => {
    settingStoreInstance.setThemeColor(e)
  }
})
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585'
])
</script>

<style lang="scss" scoped></style>
