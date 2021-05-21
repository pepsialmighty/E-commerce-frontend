// User types
export const LOG_IN = 'LOG_IN'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILED = 'LOG_IN_FAILED'

export type UserState = {
  userInfo: {
    token?: string
  }
}

export type UserAction = loginSuccess | loginFailed

export type loginSuccess = {
  type: typeof LOG_IN_SUCCESS
  payload: {
    token: string
  }
}

export type loginFailed = {
  type: typeof LOG_IN_FAILED
}
