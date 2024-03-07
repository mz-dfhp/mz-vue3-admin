<template>
  <div
    className="h100% w100% flex-center p-x-20px box-border"
    style="
      background-image: linear-gradient(
        94deg,
        #232d3c,
        #162b5b,
        #20469c,
        #2863e3
      );
    "
  >
    <div
      className="h-554px w-100% flex overflow-hidden rounded-10px bg-#ffffff lg-w-960px"
    >
      <div
        className="w-0 flex-center overflow-hidden lg-flex-1 lg-overflow-visible"
      >
        <img width="382" height="382" :src="LoginSvg" />
      </div>
      <div className="flex flex-1 bg-#ffffff">
        <el-form
          class="m-auto overflow-hidden rounded-8px bg-#ffffff p-30px w-225px h-270px"
          :model="loginForm"
          ref="FormRef"
          :rules="rules"
          label-position="top"
          size="large"
        >
          <el-form-item>
            <div
              className="p-b-20px text-center text-22px text-#5B86E5 font-bold"
            >
              Vue3-admin
            </div>
          </el-form-item>
          <el-form-item prop="userName">
            <el-input
              v-model="loginForm.userName"
              placeholder="admin"
              :prefix-icon="UserIcon"
            />
          </el-form-item>
          <el-form-item prop="passWord">
            <el-input
              v-model="loginForm.passWord"
              type="passWord"
              placeholder="123456"
              :prefix-icon="PassWordIcon"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="w-100%"
              color="#1677ff"
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
              color="#1677ff"
              :loading="loading"
              @click="submitForm('admin')"
            >
              admin
            </el-button>
            <el-button
              type="primary"
              size="small"
              color="#1677ff"
              :loading="loading"
              @click="submitForm('test')"
            >
              test
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { userStore } from '@/store/user'
import { h, reactive, ref } from 'vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { loginIn } from '@/api'
import LoginSvg from '@/assets/svg/login-bg.svg'

const UserIcon = h('div', {
  className: 'i-bi:person',
  style: {
    fontSize: '20px',
    color: '#333333',
    flexShrink: '0'
  }
})
const PassWordIcon = h('div', {
  className: 'i-bi:bag-dash',
  style: {
    fontSize: '20px',
    color: '#333333',
    flexShrink: '0'
  }
})

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
  userName: 'admin',
  passWord: '123456'
})
const router = useRouter()
const submitForm = async (role: string) => {
  if (role) {
    loginForm.userName = role
    loginForm.passWord = role
  } else {
    if (!(loginForm.userName === 'admin' && loginForm.passWord === '123456')) {
      return ElMessage.error('请输入正确的账号密码')
    }
  }

  await FormRef?.value?.validate(async (valid: boolean) => {
    if (valid) {
      loading.value = true
      const token = await loginIn(loginForm.userName)
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
