import { takeLatest } from 'redux-saga/effects'

import {
  LOG_IN_SUCCESS,
  LOGOUT,
  VERIFIED_ADMIN,
  loginSuccessAction,
  LogoutAction,
  VerifiedAdminAction,
} from '../../types/authentication.type'

function* logUserIn(action: loginSuccessAction) {
  // debugger
  const token = action.payload.accessToken
  const userData = action.payload.userInfo
  const history = action.payload.history

  console.log('token', token)

  console.log('userData', userData)

  // const userInfo = {
  //   email: userInfo.email,
  //   username: userInfo.username,
  //   isAdmin: userInfo.isAdmin,
  // }

  try {
    localStorage.setItem('token', token)
    localStorage.setItem('userInfo', JSON.stringify(userData))
    history.push('/')
  } catch (error) {
    console.log(error)
  }
}

function* logout(action: LogoutAction) {
  const history = action.payload.history
  try {
    history.push('/signin')
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    // remove everything from redux store
    localStorage.removeItem('cartItems')
  } catch (error) {
    console.log(error)
  }
}

const watcher = [
  takeLatest(LOG_IN_SUCCESS, logUserIn),
  takeLatest(LOGOUT, logout),
]
export default watcher
