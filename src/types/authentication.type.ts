// Authentication type
export const LOG_IN = 'LOG_IN'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILED = 'LOG_IN_FAILED'
export const LOGOUT = 'LOGOUT'
export const VERIFIED_ADMIN = 'VERIFIED_ADMIN'

export type AuthenticationState = {
  accessToken: string
  userInfo: {
    email: string
    username: string
    isAdmin: boolean
  }
  // isAdmin: boolean
}

export type AuthenticationAction =
  | loginSuccessAction
  | loginFailedAction
  | LogoutAction
  | VerifiedAdminAction

// export type LoginResponse = {
//   token: string
//   history: any
// }

export type UserInfoLogin = {
  accessToken: string
  email: string
  username: string
  isAdmin: boolean
}

export type LoginResponse = {
  accessToken: string

  userInfo: {
    email: string
    username: string
    isAdmin: boolean
  }

  history: any
}

export type VerifiedAdmin = {
  email: string
  username: string
  isAdmin: boolean
}

// export type logout = {
//   type: typeof LOGOUT
//   payload: {
//     history: any
//   }
// }

export type loginSuccessAction = {
  type: typeof LOG_IN_SUCCESS
  payload: LoginResponse
}

export type loginFailedAction = {
  type: typeof LOG_IN_FAILED
}

export type LogoutAction = {
  type: typeof LOGOUT
  payload: {
    history: any
  }
}
export type VerifiedAdminAction = {
  type: typeof VERIFIED_ADMIN
  payload: {
    userInfo: {
      email: string
      username: string
      isAdmin: boolean
    }
  }
}
