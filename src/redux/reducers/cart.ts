import {
  ADD_TO_CART,
  CartItems,
  EDIT_CART,
  REMOVE_FROM_CART,
} from './../../types/cart.type'
import { CartAction, CartState } from '../../types/cart.type'

export default function cartReducer(
  state: CartState = { cartItems: [] },
  action: CartAction
) {
  switch (action.type) {
    case ADD_TO_CART: {
      const item: any = action.payload

      const existItem = state.cartItems.find((x) => x.product === item.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    }
    case REMOVE_FROM_CART: {
      const { id } = action.payload

      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== id),
      }
    }
    case EDIT_CART: {
      const item = action.payload

      console.log('item', item)

      const existItem = state.cartItems.find((x) => x.product === item.product)

      console.log('existItem', existItem)

      if (existItem) {
        const index =
          existItem &&
          state.cartItems.findIndex((x) => x.product === existItem.product)

        console.log(index)
        const newCartItems = state.cartItems
        console.log('newCartItems', newCartItems)
        if (index > -1) {
          console.log(state.cartItems.splice(index, 1, item))
        } else {
          console.log(state.cartItems)
        }
        return {
          ...state,
          cartItems: [...newCartItems],
        }
      }
      // else {
      //   return {
      //     ...state,
      //     cartItems: [...state.cartItems],
      //   }
      // }
    }

    default:
      return state
  }
}
