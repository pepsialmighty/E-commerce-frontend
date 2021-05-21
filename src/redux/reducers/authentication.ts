import {
  LOG_IN_SUCCESS,
  LOG_IN_FAILED,
  VERIFIED_ADMIN,
  AuthenticationState,
  AuthenticationAction,
} from '../../types/authentication.type'

const initialState: AuthenticationState = {
  accessToken: '',
  userInfo: { email: '', username: '', isAdmin: false },
}

export default function authentication(
  state = initialState,
  action: AuthenticationAction
): AuthenticationState {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      const { accessToken, userInfo } = action.payload
      console.log('from reducer', accessToken)
      return {
        ...state,
        accessToken,
        userInfo,
      }
    case VERIFIED_ADMIN:
      return {
        ...state,
        userInfo: action.payload.userInfo,
      }

    default:
      return state
  }
}
