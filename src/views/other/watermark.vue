<template>
  <div>
    <el-card shadow="hover">
      <el-button type="primary" @click="renderWatermark">盒子水印</el-button>
      <el-button type="primary" @click="removeWatermark">删除水印</el-button>
    </el-card>
    <br />
    <el-card shadow="hover">
      <el-button type="primary" @click="renderWatermarkBody"
        >项目水印
      </el-button>
      <el-button type="primary" @click="removeWatermarkBody"
        >删除水印
      </el-button>
    </el-card>
    <br />
    <el-card shadow="hover">
      <div h-300px ref="targetRef"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts" name="watermark">
import { useWatermark } from '@/hooks'
import { Ref, ref } from 'vue'

const targetRef = ref()
const bodyRef = ref(document.querySelector('body'))
const { renderWatermark, removeWatermark } = useWatermark({
  text: 'watermark',
  targetRef
})
const {
  renderWatermark: renderWatermarkBody,
  removeWatermark: removeWatermarkBody
} = useWatermark({
  text: 'mz-vue3-admin',
  targetRef: bodyRef as Ref<HTMLElement>
})
</script>

<style scoped lang="scss"></style>
