import axios from 'axios'
import { userStoreWithout } from '@/stores/modules/user'
import requestConfig from './config'
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'
import { responseCodeEnum } from '@/enmus'
import { loginOut } from '@/api'

/**
 *  axios
 *  1. axios 不需要过度封装！！！
 *  2. axios 内部content-type 内部是自动设置了
 */
const instance = axios.create({
  baseURL: requestConfig.baseURL,
  timeout: requestConfig.timeout
})

instance.interceptors.request.use(
  (config) => {
    const token = userStoreWithout().getToken
    if (token && config.headers) config.headers[requestConfig.tokenName] = token
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (config) => {
    if (config.data.status === responseCodeEnum.loginCode) {
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

export default instance
