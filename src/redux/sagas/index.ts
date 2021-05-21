import { all } from 'redux-saga/effects'

import productSagas from './product'
import uiSagas from './ui'
import authenticationSagas from './authentication'
import cartSagas from './cart'

export default function* rootSaga() {
  yield all([...productSagas, ...uiSagas, ...authenticationSagas, ...cartSagas])
}
