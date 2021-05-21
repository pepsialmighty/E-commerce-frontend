import { CartItems } from './../../types/cart.type'

export type CartItemProps = {
  item: CartItems
  qtyChangeHandler: (id: string, qty: string) => void
  removeHandler: (id: string) => void
  keyId: string
}
