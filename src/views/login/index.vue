<script setup lang="ts">
import { useRouter } from 'vue-router'
import { userStore } from '@/stores/modules/user'
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
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
  loginForm.userName = role
  loginForm.passWord = role
  loading.value = true
  await FormRef?.value?.validate(async (valid: boolean, fields: any) => {
    if (valid) {
      await userStore().setToken(role)
      loading.value = false
      router.replace({
        path: '/'
      })
    } else {
      loading.value = false
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <div class="login-bgc"></div>
  <div class="login-box">
    <el-form :model="loginForm" class="login-form" ref="FormRef" :rules="rules">
      <el-form-item prop="userName">
        <el-input v-model="loginForm.userName" />
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input v-model="loginForm.passWord" type="passWord" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          style="margin: 0 auto"
          :loading="loading"
          @click="submitForm('admin')"
          >admin</el-button
        >
        <el-button
          type="primary"
          style="margin: 0 auto"
          :loading="loading"
          @click="submitForm('test')"
          >test</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.login-bgc {
  height: 100vh;
  background: url(../../assets/images/login.jpg) 100% 100% fixed no-repeat;
  background-size: cover;
}
.login-box {
  position: fixed;
  width: 40vw;
  height: 35vw;
  background: rgba(255, 255, 255, 0.4);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  .login-form {
    padding: 20%;
  }
}
@media screen and (max-width: 800px) {
  .login-box {
    width: 60vw;
    height: 60vw;
  }
}
@media screen and (max-width: 600px) {
  .login-box {
    width: 80vw;
    height: 80vw;
  }
}
</style>
