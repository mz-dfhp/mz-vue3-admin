export interface IPermission {
  name: string
  path: string
  title?: string
  sort?: number
  icon?: string
  children?: Array<IPermission>
}

export interface UserInfo {
  name?: string
  avatar?: string
  role?: string
  permission: Array<IPermission>
}
