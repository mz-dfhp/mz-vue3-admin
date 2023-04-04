import axios from 'axios'
import { userStoreWithout } from '@/stores/modules/user'
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'
import { responseCodeEnum, requestConfigEnum } from '@/enmus'
import { loginOut } from '@/api'

/**
 *  axios
 *  1. axios 不需要过度封装！！！
 *  2. axios 内部content-type 内部是自动设置了
 */
export const http = axios.create({
  baseURL: requestConfigEnum['BASE_URL'] as string,
  timeout: requestConfigEnum['TIME_OUT'] as number
})

http.interceptors.request.use(
  (config) => {
    const token = userStoreWithout().getToken
    if (token && config.headers)
      config.headers[requestConfigEnum['TOKEN_NAME']] = token
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (config) => {
    if (config.data.status === responseCodeEnum['ERROR_CODE']) {
      ElMessage.error(config.data.message)
      loginOut()
    } else {
      ElMessage.error(config.data.message)
      return Promise.reject(config)
    }
    return Promise.resolve(config)
  },
  (error) => {
    let message = error.message
    if (message === 'Network Error') {
      message = '后端网络故障'
    } else if (message.includes('timeout')) {
      message = '接口请求超时'
    } else if (message.includes('Request failed with status code')) {
      message = `接口异常`
    }
    ElMessage({
      message,
      type: 'error'
    })
    return Promise.reject(error)
  }
)
