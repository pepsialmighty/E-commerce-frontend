import { VerifiedAdmin } from './../../types/authentication.type'
import { Dispatch } from 'redux'

import {
  LoginResponse,
  LOG_IN_SUCCESS,
  LOG_IN_FAILED,
  LOGOUT,
  LogoutAction,
  UserInfoLogin,
  loginSuccessAction,
  VERIFIED_ADMIN,
} from '../../types/authentication.type'

// export type LoginSuccessAction = {
//   type: 'LOG_IN_SUCCESS'
//   payload: {
//     token: string
//     history: any
//   }
// }

export const loginSuccess = (userInfoLogin: UserInfoLogin, history: any) => {
  return {
    type: LOG_IN_SUCCESS,
    payload: {
      accessToken: userInfoLogin.accessToken,
      userInfo: {
        email: userInfoLogin.email,
        username: userInfoLogin.username,
        isAdmin: userInfoLogin.isAdmin,
      },
      history,
    },
  }
}

export function loginFailed(error: Error | string) {
  alert(error)
  return {
    type: LOG_IN_FAILED,
  }
}

export function logout(history: any): LogoutAction {
  return {
    type: LOGOUT,
    payload: { history },
  }
}

export function verifiedAdmin(verifiedAdmin: VerifiedAdmin) {
  return {
    type: VERIFIED_ADMIN,
    payload: {
      userInfo: {
        email: verifiedAdmin.email,
        username: verifiedAdmin.username,
        isAdmin: verifiedAdmin.isAdmin,
      },
    },
  }
}
