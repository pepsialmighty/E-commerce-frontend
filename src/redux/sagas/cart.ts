import { takeEvery, takeLatest } from 'redux-saga/effects'

import {
  AddToCartAction,
  RemoveFromCartAction,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EDIT_CART,
  EditCartAction,
} from './../../types/cart.type'
import { AppState } from '../../types'
import { CartItems } from '../../types/cart.type'

function* addToCart(action: AddToCartAction) {
  const item = action.payload

  try {
    // localStorage.setItem('cartItems', JSON.stringify([itemInCart, item]))
    let itemInCart = localStorage.getItem('cartItems') ?? '[]'

    const parsed = JSON.parse(itemInCart)
    parsed.push(item)
    // localStorage.removeItem('cartItems')
    localStorage.setItem('cartItems', JSON.stringify(parsed))
  } catch (error) {
    console.log(error)
  }
}

function* removeFromCart(action: RemoveFromCartAction) {
  const item = action.payload

  try {
    // localStorage.setItem('cartItems', JSON.stringify([itemInCart, item]))
    // ?? means if the value equal to null then assign it to '[]'
    let itemInCart = localStorage.getItem('cartItems') ?? '[]'

    const parsed: CartItems[] = JSON.parse(itemInCart)

    const newArr = parsed.filter((x) => x.product !== item.id)
    console.log(newArr)

    // localStorage.removeItem('cartItems')
    localStorage.setItem('cartItems', JSON.stringify(newArr))
  } catch (error) {
    console.log(error)
  }
}

function* editCart(action: EditCartAction) {
  const item = action.payload
  let itemInCart = localStorage.getItem('cartItems') ?? '[]'
  const parsed: CartItems[] = JSON.parse(itemInCart)
  const index = parsed.findIndex((x) => x.product === item.product)
  parsed.splice(index, 1, item)
  localStorage.setItem('cartItems', JSON.stringify(parsed))
  try {
  } catch (error) {
    console.log(error)
  }
}

const watcher = [
  takeLatest(ADD_TO_CART, addToCart),
  takeLatest(REMOVE_FROM_CART, removeFromCart),
  takeLatest(EDIT_CART, editCart),
]
export default watcher
