import { Dispatch } from 'redux'

import {
  GetUserSearch,
  USER_SEARCH,
  UserSearch,
} from '../../types/userAction.type'

export const getUserSearch = (input: UserSearch) => async (
  dispatch: Dispatch
) => {
  dispatch({
    type: USER_SEARCH,
    payload: input,
  })
}
