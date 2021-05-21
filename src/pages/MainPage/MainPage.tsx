import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import './MainPage.scss'
import Product from '../../components/Product/Product'
import { AppState } from '../../types'

// Actions
import { getProducts as listProducts } from '../../redux/actions/product'

const MainPage = () => {
  const [state, setstate] = useState()
  const dispatch = useDispatch()

  const getProducts = useSelector((state: AppState) => state.products)
  const { products, loading, error } = getProducts

  const getUserInput = useSelector((state: AppState) => state.userAction)

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5001/api/v1/products')
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err))
  // }, [])

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  console.log(getUserInput.input)

  return (
    <div className="homescreen">
      <h1 className="homescreen__title">Latest Product</h1>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : products && getUserInput.input !== '' ? (
          products
            .filter((product) => {
              return product.name.toLowerCase().indexOf(getUserInput.input) > -1
            })
            .map((product) => {
              return <Product key={product._id} productData={product} />
            })
        ) : (
          products &&
          products.map((product) => {
            return <Product key={product._id} productData={product} />
          })
        )}
      </div>
    </div>
  )
}

export default MainPage
