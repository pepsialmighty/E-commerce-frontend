// Action types
export const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST'
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
export const GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL'

export const GET_PRODUCT_DETAIL_REQUEST = 'GET_PRODUCT_DETAIL_REQUEST'
export const GET_PRODUCT_DETAIL_SUCCESS = 'GET_PRODUCT_DETAIL_SUCCESS'
export const GET_PRODUCT_DETAIL_FAIL = 'GET_PRODUCT_DETAIL_FAIL'
export const GET_PRODUCT_DETAIL_RESET = 'GET_PRODUCT_DETAIL_RESET'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

// A product
export interface Product {
  _id: string
  name: string
  description: string
  price: number
  countInStock: number
  imageUrl: string
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type GetProductRequest = {
  type: typeof GET_PRODUCT_REQUEST
  payload: {
    loading: boolean
    products: Product[]
  }
}

export type GetProductSuccess = {
  type: typeof GET_PRODUCT_SUCCESS
  payload: {
    loading: boolean
    products: Product[]
  }
}

export type GetProductFail = {
  type: typeof GET_PRODUCT_FAIL
  payload: {
    loading: boolean
    products: null
    error: Error
  }
}

export type GetProductDetailRequest = {
  type: typeof GET_PRODUCT_DETAIL_REQUEST
  payload: {
    loading: boolean
    // product: Product
  }
}

export type GetProducttDetailSuccess = {
  type: typeof GET_PRODUCT_DETAIL_SUCCESS
  payload: {
    loading: boolean
    product: Product
  }
}

export type GetProductDetailFail = {
  type: typeof GET_PRODUCT_DETAIL_FAIL
  payload: {
    loading: boolean
    product: null
    error: Error
  }
}

export type GetProductDetailReset = {
  type: typeof GET_PRODUCT_DETAIL_RESET
  payload: {
    loading: boolean
    product: {}
  }
}

export type ProductActions =
  | GetProductRequest
  | GetProductSuccess
  | GetProductFail
  | GetProductDetailRequest
  | GetProducttDetailSuccess
  | GetProductDetailFail
  | GetProductDetailReset
// Use this union in reducer

export type ProductsState = {
  loading: boolean
  products: Product[] | null
  error?: Error
}

export type ProductDetailState = {
  loading: boolean
  product?: any
  // product: Product | {} | null
  error?: Error
}

export type ProductDetailStateRequest = {
  loading: boolean
  // product?: Product | {}
  error?: Error
}

export interface GetProductDetailProp {
  getDetail: Product
}
