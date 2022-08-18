import myRequest from '../'
import { loginParams, LoginResult, DataType } from './type'

enum LoginApi {
  loginUrl = '/login'
}

export function postLogin(params: loginParams) {
  return myRequest.post<DataType<LoginResult>>({
    url: LoginApi.loginUrl,
    data: params
  })
}
