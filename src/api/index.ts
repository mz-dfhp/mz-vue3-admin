import { UserInfo } from '@/interface'
export function getUserInfo(role: string) {
  return new Promise<UserInfo>((resolve) => {
    setTimeout(() => {
      resolve(getRole(role))
    }, 1000)
  })
}

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
        ? 'https://user-images.githubusercontent.com/63582593/202658523-8ab8372b-c554-45e9-9786-70754b706145.jpg'
        : 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    permission: [
      {
        path: '/component',
        name: 'Component',
        title: '组件',
        sort: 2,
        children: [
          {
            path: 'component-one',
            name: 'Component-one',
            title: '组件1'
          },
          {
            path: 'component-two',
            name: 'Component-two',
            title: '组件2'
          }
        ]
      },
      {
        path: '/',
        name: 'Index',
        sort: 1,
        title: '首页',
        redirect: '/index',
        children: [
          {
            path: '/index',
            name: 'Index-index',
            title: '工作台'
          }
        ]
      },
      {
        path: '/keep',
        name: 'Keep',
        title: '缓存Keep',
        children: [
          {
            path: 'keep-one',
            name: 'Keep-one',
            title: '缓存组件一'
          },
          {
            path: 'keep-two',
            name: 'Keep-two',
            title: '缓存组件二',
            children: [
              {
                path: 'keep-two-page',
                name: 'Keep-two-page',
                title: '二级缓存页面'
              },
              {
                path: 'keep-three',
                name: 'Keep-three',
                title: '缓存组件三',
                children: [
                  {
                    path: 'keep-three-page',
                    name: 'Keep-three-page',
                    title: '三级缓存页面'
                  },
                  {
                    path: 'keep-four',
                    name: 'Keep-four',
                    title: '缓存组件四',
                    children: [
                      {
                        path: 'keep-four-page',
                        name: 'Keep-four-page',
                        title: '四级缓存页面'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ].filter((item) => !filterPath.includes(item.path))
  }
  return userInfo
}
