<template>
  <div flex-center flex-col>
    <div class="w-100% h-50vh flex">
      <Signature
        class="border flex-1 flex-shrink-0"
        ref="signatureRef"
        @confirm="confirm"
      />
      <div class="flex-1 border m-l-20px flex-shrink-0">
        <img :src="signUrl" v-if="signUrl" />
      </div>
    </div>
    <div class="m-t-20px">
      <el-button type="primary" @click="onClear">重置</el-button>
      <el-button type="primary" @click="onConfirm">确认</el-button>
    </div>
  </div>
</template>

<script setup lang="ts" name="SignatureDemo">
import { ref } from 'vue'
const signatureRef = ref<any>()
const signUrl = ref('')
const onClear = () => {
  signatureRef.value.clear()
  signUrl.value = ''
}
const onConfirm = () => {
  signatureRef.value.confirm()
}

const confirm = (canvas: any, data: any) => {
  if (data === '') {
    console.log(canvas)
    return false
  }
  signUrl.value = data
}
</script>
<style scoped lang="scss"></style>
