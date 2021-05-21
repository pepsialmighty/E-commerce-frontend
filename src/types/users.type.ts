// Users types
export const GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST'
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS'
export const GET_ALL_USERS_FAIL = 'GET_ALL_USERS_FAIL'

export type Users = {
  _id: string
  username: string
  email: string
  isAdmin: boolean
}

export type GetAllUserRequest = {
  type: typeof GET_ALL_USERS_REQUEST
  payload: {
    loading: boolean
    users: Users[]
  }
}

export type GetAllUserSuccess = {
  type: typeof GET_ALL_USERS_SUCCESS
  payload: {
    loading: boolean
    users: Users[]
  }
}

export type GetAllUserFail = {
  type: typeof GET_ALL_USERS_FAIL
  payload: {
    loading: boolean
    users: Users[]
    error: Error
  }
}

export type UsersAction = GetAllUserRequest | GetAllUserSuccess | GetAllUserFail

export type UsersState = {
  loading: boolean
  users: Users[]
  error?: Error
}
