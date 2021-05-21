import { Dispatch } from 'redux'
import axios from 'axios'

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CartAction,
  EDIT_CART,
} from '../../types/cart.type'
import { Product } from '../../types/product.type'

export const addToCart = (id: string, qty: string) => async (
  dispatch: Dispatch
) => {
  const { data } = await axios.get(
    `http://localhost:5001/api/v1/products/${id}`
  )
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })
}

export const editCart = (id: string, qty: string) => async (
  dispatch: Dispatch
) => {
  const { data } = await axios.get(
    `http://localhost:5001/api/v1/products/${id}`
  )

  // await axios.put(`http://localhost:5001/api/v1/products/${id}`, qty)

  console.log('data from action', id, qty)

  dispatch({
    type: EDIT_CART,
    payload: {
      product: id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })
}

export const removeFromCart = (id: string) => (dispatch: Dispatch) => {
  console.log('from action', id)
  dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      id,
    },
  })
}
