import { USER_SEARCH } from '../../types/userAction.type'

export default function userSearchReducer(state: any = '', action: any) {
  switch (action.type) {
    case USER_SEARCH:
      return {
        input: action.payload,
      }

    default:
      return state
  }
}
