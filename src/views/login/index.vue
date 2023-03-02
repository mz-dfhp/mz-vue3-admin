<template>
  <div class="bg-#5B86E5 w100% h100% flex-center">
    <div class="w80% h80% bg-#ABC1F2 flex rounded-10px overflow-hidden">
      <div lg-flex-1></div>
      <div class="bg-#ffffff flex-1 flex">
        <el-form
          class="m-auto w80%"
          :model="loginForm"
          ref="FormRef"
          :rules="rules"
        >
          <el-form-item>
            <div class="text-8 font-bold p-b-10 text-#5B86E5">木子</div>
          </el-form-item>
          <el-form-item prop="userName">
            <el-input v-model="loginForm.userName" placeholder="userName" />
          </el-form-item>
          <el-form-item prop="passWord">
            <el-input
              v-model="loginForm.passWord"
              type="passWord"
              placeholder="passWord"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="w-100%"
              :loading="loading"
              @click="submitForm('')"
              >login</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="small"
              :loading="loading"
              @click="submitForm('admin')"
              >admin</el-button
            >
            <el-button
              type="primary"
              size="small"
              :loading="loading"
              @click="submitForm('test')"
              >test</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { userStore } from '@/stores/modules/user'
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { loginIn } from '@/api'
const rules = reactive<FormRules>({
  userName: [
    {
      required: true,
      message: 'Please input userName',
      trigger: 'blur'
    }
  ],
  passWord: [
    {
      required: true,
      message: 'Please input passWord',
      trigger: 'blur'
    }
  ]
})
const FormRef = ref<FormInstance>()
const loading = ref(false)
const loginForm = reactive({
  userName: '',
  passWord: ''
})
const router = useRouter()
const submitForm = async (role: string) => {
  role &&
    ((loginForm.userName = role),
    (loginForm.passWord = role),
    (loading.value = true))
  await FormRef?.value?.validate(async (valid: boolean) => {
    if (valid) {
      const token = await loginIn(role)
      await userStore().setToken(token)
      loading.value = false
      router.replace({
        path: '/'
      })
    } else {
      loading.value = false
    }
  })
}
</script>

<style scoped lang="scss">
@media screen and (max-width: 800px) {
  .left-box {
    display: none;
  }
}
</style>
