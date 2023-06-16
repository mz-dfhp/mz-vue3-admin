<template>
  <div class="bg-[var(--el-color-primary-light-3)] w100% h100% flex-center">
    <div class="w80% h80% bg-#ABC1F2 flex rounded-10px overflow-hidden">
      <div lg-flex-1></div>
      <div class="bg-#ffffff flex-1 flex">
        <el-form
          class="m-auto w80%"
          :model="loginForm"
          ref="FormRef"
          :rules="rules"
          status-icon
          label-position="top"
        >
          <el-form-item>
            <div class="text-8 font-bold p-b-10 text-main">mz-vue3-admin</div>
          </el-form-item>
          <el-form-item prop="userName" label="账号">
            <el-input
              v-model="loginForm.userName"
              size="large"
              placeholder="userName"
            />
          </el-form-item>
          <el-form-item prop="passWord" label="密码">
            <el-input
              v-model="loginForm.passWord"
              type="passWord"
              size="large"
              placeholder="passWord"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="w-100% p-y-20px!"
              :loading="loading"
              @click="submitForm('')"
            >
              login
            </el-button>
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
import { userStore } from '@/store/user'
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
