export enum requestContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // json
  TEXT = 'text/plain;charset=UTF-8',
  // form-data 一般配合qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  上传
  FORM_DATA = 'multipart/form-data;charset=UTF-8'
}

export enum responseCodeEnum {
  'SUCCEE_CODE' = 200,
  'LOGIN_CODE' = 401,
  'ERROR_CODE' = 500
}

export enum requestConfigEnum {
  'BASE_URL' = 'https://www.baidu.com/',
  'TIME_OUT' = 2000,
  'TOKEN_NAME' = 'Token'
}
