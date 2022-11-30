export interface IPermissionList {
  name: string
  path: string
  title?: string
  sort?: number
  icon?: string
  children?: Array<IPermissionList>
}

export interface UserInfo {
  name?: string
  avatar?: string
  role?: string
  permission: Array<IPermissionList>
}
