import { combineReducers } from 'redux'

import {
  getProductReducer as products,
  getProductDetailsReducer as productDetail,
} from './product'

import ui from './ui'
// import user from './user'
import authentication from './authentication'
import cart from './cart'
import { getUsersReducer as users } from './users'
import userAction from './userAction'

const createRootReducer = () =>
  combineReducers({
    // getProductReducer,
    // getProductDetails,
    products,
    productDetail,
    ui,
    authentication,
    cart,
    users,
    userAction,
  })

export default createRootReducer
