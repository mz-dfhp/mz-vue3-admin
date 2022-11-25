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
      <div>主题色</div>
      <el-color-picker
        color-format="rgb"
        v-model="settingInfo.color"
        :predefine="predefineColors"
      />
    </el-divider>
    <!-- <el-divider> 动画 </el-divider> -->
    <template #footer>
      <div style="flex: auto">
        <el-button @click="show = false">cancel</el-button>
        <el-button type="primary" @click="confirmClick">confirm</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts" name="AppSetting">
import { settingStore } from '@/stores/modules/setting'
import { ref, reactive, watch } from 'vue'
const settingStoreInstance = settingStore()
const show = ref<boolean>(false)
const showSetting = () => {
  show.value = true
}
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585'
])
let settingInfo = reactive({
  color: settingStoreInstance.getThemeColor
})

const confirmClick = () => {
  settingStoreInstance.setThemeColor(settingInfo.color)
  show.value = false
}
watch(show, (e) => {
  if (!e) return
  settingInfo.color = settingStoreInstance.getThemeColor
})
</script>

<style lang="scss" scoped></style>
