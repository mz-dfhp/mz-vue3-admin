export enum PageEnum {
  ROOT_PATH = '/',
  ROOT_INDEX = '/index'
}

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
  'succceCode' = 200,
  'loginCode' = 401,
  'errorCode' = 500
}
