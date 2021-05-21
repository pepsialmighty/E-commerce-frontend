import React from 'react'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'
import { IconButton } from '@material-ui/core'

import './CartItem.scss'
import { CartItemProps } from './CartItem.type'

const CartItem = ({
  item,
  qtyChangeHandler,
  removeHandler,
  keyId,
}: CartItemProps) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} className="img-fluid " alt={item.name} />
      </div>
      <Link to={`/products/${item.product}`} className="cartitem__name">
        <p>{item.name}</p>
      </Link>

      <p className="cartitem__price">€{item.price}</p>

      {/* <p className="cartitem__select">{item.qty}</p> */}
      <select
        className="cartitem__select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>

      <IconButton
        aria-label="show 11 new notifications"
        color="secondary"
        className="cartitem_deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  )
}

export default CartItem
