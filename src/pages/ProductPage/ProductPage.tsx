import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import './ProductPage.scss'

// Actions
import { getProductDetail } from '../../redux/actions/product'
import { addToCart } from '../../redux/actions/cart'

import { AppState } from '../../types'
import { ProductPageProp } from './ProductPage.type'
import { GetProductDetailProp } from '../../types/product.type'

const ProductPage = ({ match, history }: ProductPageProp) => {
  const [qty, setQty] = useState('1')

  const dispatch = useDispatch()

  const productDetails = useSelector((state: AppState) => state.productDetail)
  const { loading, error, product } = productDetails

  const cart = useSelector((state: AppState) => state.cart)
  const { cartItems } = cart

  console.log(cartItems)

  useEffect(() => {
    dispatch(getProductDetail(match.params.id))
  }, [dispatch])

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty))
    history.push('/cart')
  }

  return (
    <div className="container">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        product && (
          <div className="productpage">
            <div className="productpage__title">
              <Link to="/">
                <IconButton color={'primary'} style={{ fontSize: 25 }}>
                  <ChevronLeftIcon />
                </IconButton>
              </Link>
              <h1>Product page</h1>
            </div>
            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 productpage__img">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="img-fluid"
                />
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 productpage__info">
                <table className="table">
                  <tbody>
                    <tr>
                      <th style={{ borderTop: 'none' }}>
                        <h1>{product.name}</h1>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <h5>Price: €{product.price}</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>{product.description}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 productpage__action">
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row" style={{ borderTop: 'none' }}>
                        Price:
                      </th>
                      <td style={{ borderTop: 'none' }}>€{product.price}</td>
                    </tr>
                    <tr>
                      <th scope="row">Status:</th>
                      <td>
                        {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Qty</th>
                      <td>
                        <select
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <button
                          type="button"
                          className="btn btn-dark"
                          style={{ width: '100%' }}
                          onClick={addToCartHandler}
                          disabled={
                            cartItems.some((x) => x.product === product._id)
                              ? true
                              : false
                          }
                        >
                          Add to Cart
                        </button>
                        {cartItems.some(
                          (item) => item.product === product._id
                        ) ? (
                          <p>
                            You already have this item in the cart, go to cart
                            page? <Link to="/cart">Checkout</Link>
                          </p>
                        ) : (
                          ''
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default ProductPage
