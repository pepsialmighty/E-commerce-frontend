import { UsersState, UsersAction } from './../../types/users.type'
import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
} from '../../types/users.type'

export function getUsersReducer(
  state: UsersState = {
    loading: false,
    users: [],
  },
  action: UsersAction
): UsersState {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST: {
      return {
        loading: true,
        users: [],
      }
    }
    case GET_ALL_USERS_SUCCESS: {
      return {
        loading: false,
        users: action.payload.users,
      }
    }
    case GET_ALL_USERS_FAIL: {
      return {
        loading: false,
        users: action.payload.users,
        error: action.payload.error,
      }
    }
    default:
      return state
  }
}
