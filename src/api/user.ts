import { UserInfo } from '@/interface'
import { asyncRoutes } from '@/router/asyncRoutes'
import { formatteRoutes } from '@/utils/route'

export function getUserInfo(role: string) {
  return new Promise<UserInfo>((resolve) => {
    resolve(getRole(role))
  })
  function getRole(role: string): UserInfo {
    let filterPath: string[] = []
    if (role !== 'admin') {
      filterPath = ['/component']
    }
    const userInfo = {
      name: 'mz',
      age: 18,
      role,
      avatar:
        role === 'admin'
          ? 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
          : 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
      permission: formatteRoutes(asyncRoutes).filter(
        (item) => !filterPath.includes(item.path)
      )
    }
    return userInfo
  }
}

export function loginIn(token: string) {
  return new Promise<string>((resolve) => {
    resolve(token)
  })
}

export function loginOut() {
  window.localStorage.clear()
  window.location.reload()
}
