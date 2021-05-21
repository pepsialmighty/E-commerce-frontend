export const USER_SEARCH = 'USER_SEARCH'

export interface UserSearch {
  input: string
}

export type GetUserSearch = {
  type: typeof USER_SEARCH
  payload: {
    input: string
  }
}

export type UserAction = GetUserSearch
