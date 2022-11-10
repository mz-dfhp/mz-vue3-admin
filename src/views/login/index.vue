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
const loginForm = reactive({
  userName: '',
  passWord: ''
})
const router = useRouter()
const userStoreInstance = userStore()
const submitForm = async () => {
  await FormRef?.value?.validate(async (valid: any, fields: any) => {
    if (valid) {
      await userStoreInstance.setToken('登录拿到的token')
      router.replace({
        path: '/'
      })
    } else {
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
        <el-input v-model="loginForm.passWord" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="margin: 0 auto" @click="submitForm"
          >login in</el-button
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
</style>
