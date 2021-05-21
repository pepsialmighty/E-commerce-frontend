import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_RESET,
} from './../../types/product.type'
import { Dispatch } from 'redux'
import axios from 'axios'

import {} from '../../types/product.type'

export const getProducts = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST })

    const { data } = await axios.get('/products')

    // console.log('data from action', data)

    dispatch({ type: GET_PRODUCT_SUCCESS, payload: { products: data } })
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: {
        error:
          error.response && error.respone.data.message
            ? error.respone.data.message
            : error.message,
      },
    })
  }
}

export const getProductDetail = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAIL_REQUEST })

    const { data } = await axios.get(`/products/${id}`)

    dispatch({ type: GET_PRODUCT_DETAIL_SUCCESS, payload: { product: data } })
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_DETAIL_FAIL,
      payload: {
        error:
          error.response && error.respone.data.message
            ? error.respone.data.message
            : error.message,
      },
    })
  }
}

export const removeProductDetail = () => (dispatch: Dispatch) => {
  dispatch({
    type: GET_PRODUCT_DETAIL_RESET,
  })
}
