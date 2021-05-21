import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import shortid from 'shortid'

import './CartPage.scss'
import CartItem from '../../components/CartItem/CartItem'
import { AppState } from '../../types'

// Actions
import { addToCart, editCart, removeFromCart } from '../../redux/actions'
import { CartItems } from '../../types/cart.type'

const CartPage = () => {
  const dispatch = useDispatch()

  const [itemFromLocalStorage, setItemFromLocalStorage] = useState<CartItems[]>(
    []
  )

  const cart = useSelector((state: AppState) => state.cart)
  let { cartItems } = cart

  const qtyChangeHandler = (id: string, qty: string) => {
    // dispatch(addToCart(id, qty))
    dispatch(editCart(id, qty))
  }

  const removeHandler = (id: string) => {
    console.log('from comp', id)

    dispatch(removeFromCart(id))
  }

  const getCartCount = (array: CartItems[]) => {
    return array.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  const getCartSubTotal = (array: CartItems[]) => {
    return array.reduce(
      (price, item) => Number(item.qty) * item.price + price,
      0
    )
  }

  const getItemFromLocalStorage = localStorage.getItem('cartItems')

  useEffect(() => {
    const parsed =
      getItemFromLocalStorage && JSON.parse(getItemFromLocalStorage)

    setItemFromLocalStorage(parsed)
  }, [getItemFromLocalStorage, cartItems])

  useEffect(() => {
    if (getItemFromLocalStorage && cartItems.length === 0) {
      const array: CartItems[] = JSON.parse(getItemFromLocalStorage)
      var object: any = {}
      var result: any = []
      array.forEach((item: CartItems) => {
        if (!object[item.product]) {
          object[item.product] = 0
        }
        object[item.product] += 1
      })

      for (var prop in object) {
        if (object[prop] >= 2) {
          result.push(prop)
        }
      }
      console.log(result)

      cartItems.push(...JSON.parse(getItemFromLocalStorage))
    }
  }, [])

  return (
    <div className="container">
      <div className="row cartscreen">
        <div className="col-12 cartscreen__title">
          <h1>Shopping cart</h1>
        </div>
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 cartscreen__left">
          {cartItems.length === 0 && getItemFromLocalStorage !== null ? (
            cartItems.map((item: CartItems) => {
              const keyId = `${
                item.product
              }${shortid.generate()}${new Date().getTime()}`
              return (
                <CartItem
                  key={item.product}
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={removeHandler}
                  keyId={keyId}
                />
              )
            })
          ) : cartItems.length !== 0 && getItemFromLocalStorage === null ? (
            cartItems.map((item) => {
              const keyId = `${
                item.product
              }${shortid.generate()}${new Date().getTime()}`
              return (
                <CartItem
                  key={item.product}
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={removeHandler}
                  keyId={keyId}
                />
              )
            })
          ) : cartItems && getItemFromLocalStorage !== null ? (
            cartItems.map((item: CartItems) => {
              const keyId = `${
                item.product
              }${shortid.generate()}${new Date().getTime()}`
              return (
                <CartItem
                  key={item.product}
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={removeHandler}
                  keyId={keyId}
                />
              )
            })
          ) : (
            <div>
              <h2>Your cart is empty</h2>
              <Link to="/">Go Back</Link>
            </div>
          )}
        </div>
        <div className="offset-md-1 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 cartscreen__right">
          <div className="cartscreen__info">
            {cartItems.length === 0 && getItemFromLocalStorage !== null ? (
              <div>
                <h4>Subtotal ({getCartCount(itemFromLocalStorage)}) items</h4>
                <p>€{getCartSubTotal(itemFromLocalStorage).toFixed(2)}</p>
              </div>
            ) : cartItems.length === 0 && getItemFromLocalStorage === null ? (
              <div>
                <h4>Subtotal ({getCartCount(cartItems)}) items</h4>
                <p>€{getCartSubTotal(cartItems).toFixed(2)}</p>
              </div>
            ) : (
              <div>
                <h4>Subtotal ({getCartCount(cartItems)}) items</h4>
                <p>€{getCartSubTotal(cartItems).toFixed(2)}</p>
              </div>
            )}
          </div>
          <div className="cartscreen__btn">
            <Link to="/">
              <button type="button" className="btn btn-dark btn-sm">
                Continue shopping
              </button>
            </Link>
            <Link to="/checkout">
              <button type="button" className="btn btn-dark btn-sm">
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
