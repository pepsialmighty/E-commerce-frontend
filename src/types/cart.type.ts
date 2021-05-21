import { Product } from './product.type'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const EDIT_CART = 'EDIT_CART'
export const CART_RESET = 'CART_RESET'

export type CartItems = {
  product: string
  name: string
  imageUrl: string
  price: number
  countInStock: number
  qty: string
}

export type CartState = {
  cartItems: CartItems[]
}

export type AddToCartAction = {
  type: typeof ADD_TO_CART
  payload: {}
}

export type RemoveFromCartAction = {
  type: typeof REMOVE_FROM_CART
  payload: {
    id: string
  }
}

export type EditCartAction = {
  type: typeof EDIT_CART
  payload: {
    product: string
    name: string
    imageUrl: string
    price: number
    countInStock: number
    qty: string
  }
}

export type CartAction = AddToCartAction | RemoveFromCartAction | EditCartAction
