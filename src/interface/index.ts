export interface IPermissionList {
  name: string
  path: string
  meta: {
    title: string
  }
  children?: Array<IPermissionList>
}

export interface UserInfo {
  name?: string
  avatar?: string
  permission: Array<IPermissionList>
}
