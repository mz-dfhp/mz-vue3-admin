import { UserInfo } from '@/interface'
export function getUserInfo() {
  return new Promise<UserInfo>((resolve) => {
    setTimeout(() => {
      const userInfo = {
        name: 'mz',
        age: 18,
        permission: [
          {
            path: '/component',
            name: 'Component',
            meta: {
              title: '组件'
            },
            children: [
              {
                path: 'component-one',
                name: 'Component-one',
                meta: {
                  title: '组件1'
                }
              },
              {
                path: 'component-two',
                name: 'Component-two',
                meta: {
                  title: '组件2'
                }
              }
            ]
          },
          {
            path: '/',
            name: 'Index',
            meta: {
              title: '首页'
            },
            redirect: '/index',
            children: [
              {
                path: '/index',
                name: 'Index-index',
                meta: {
                  title: '工作台'
                }
              }
            ]
          },
          {
            path: '/keep',
            name: 'Keep',
            meta: {
              title: '缓存Keep'
            },
            children: [
              {
                path: 'keep-one',
                name: 'Keep-one-page',
                meta: {
                  title: '缓存组件一',
                  keepAlive: true
                }
              },
              {
                path: 'keep-two',
                name: 'Keep-two',
                meta: {
                  title: '缓存组件二'
                },
                redirect: '',
                children: [
                  {
                    path: 'keep-two-page',
                    name: 'Keep-two-page',
                    meta: {
                      title: '二级缓存页面',
                      keepAlive: true
                    }
                  },
                  {
                    path: 'keep-three',
                    name: 'Keep-three',
                    meta: {
                      title: '缓存组件三'
                    },
                    redirect: '',
                    children: [
                      {
                        path: 'keep-three-page',
                        name: 'Keep-three-page',
                        meta: {
                          title: '三级缓存页面',
                          keepAlive: true
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
      resolve(userInfo)
    }, 1000)
  })
}
