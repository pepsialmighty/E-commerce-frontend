import { AuthenticationState } from './types/authentication.type'
import { CartState } from './types/cart.type'
import { ProductDetailState, ProductsState } from './types/product.type'
import { UsersState } from './types/users.type'
import { UserSearch } from './types/userAction.type'

// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  products: ProductsState
  productDetail: ProductDetailState
  ui: UiState
  authentication: AuthenticationState
  cart: CartState
  users: UsersState
  userAction: UserSearch
}

export type MatchProp = {
  match: any
}

export type HistoryProp = {
  history: any
}
