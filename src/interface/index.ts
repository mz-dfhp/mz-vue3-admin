export interface IPermissionList {
  name: string
  path: string
  title?: string
  sort?: number
  children?: Array<IPermissionList>
}

export interface UserInfo {
  name?: string
  avatar?: string
  permission: Array<IPermissionList>
}
