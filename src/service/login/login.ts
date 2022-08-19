import myRequest from '../'
import { loginParams, LoginResult, DataType } from './type'

enum LoginApi {
  loginUrl = '/login',
  userInfoUrl = '/users/',
  userMenuUrl = '/role/'
}

export function postLogin(params: loginParams) {
  return myRequest.post<DataType<LoginResult>>({
    url: LoginApi.loginUrl,
    data: params
  })
}

export function getUsers(id: number) {
  return myRequest.get<DataType>({
    url: LoginApi.userInfoUrl + id,
    showLoading: false
  })
}

export function getMenus(id: number) {
  return myRequest.get<DataType>({
    url: LoginApi.userMenuUrl + id + '/menu',
    showLoading: false
  })
}
