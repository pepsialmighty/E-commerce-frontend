import {
  ProductActions,
  ProductDetailState,
  ProductDetailStateRequest,
  ProductsState,
} from '../../types/product.type'
import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_RESET,
} from '../../types/product.type'

export function getProductReducer(
  state: ProductsState = {
    loading: false,
    products: [],
  },
  action: ProductActions
): ProductsState {
  switch (action.type) {
    case GET_PRODUCT_REQUEST: {
      return {
        loading: true,
        products: [],
      }
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        loading: false,
        products: action.payload.products,
      }
    }
    case GET_PRODUCT_FAIL: {
      return {
        loading: false,
        products: action.payload.products,
        error: action.payload.error,
      }
    }

    default:
      return state
  }
}

export function getProductDetailsReducer(
  state: ProductDetailState = {
    loading: false,
    product: {},
  },
  action: ProductActions
): ProductDetailState | ProductDetailStateRequest {
  switch (action.type) {
    case GET_PRODUCT_DETAIL_REQUEST: {
      return {
        loading: true,
      }
    }
    case GET_PRODUCT_DETAIL_SUCCESS: {
      return {
        loading: false,
        product: action.payload.product,
      }
    }
    case GET_PRODUCT_DETAIL_FAIL: {
      return {
        loading: false,
        // product: action.payload.products,
        error: action.payload.error,
      }
    }
    case GET_PRODUCT_DETAIL_RESET: {
      return {
        loading: false,
        product: {},
      }
    }

    default:
      return state
  }
}

export default { getProductReducer, getProductDetailsReducer }
