import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { CardActionArea, CardMedia } from '@material-ui/core'
import { Link } from 'react-router-dom'

import user from '../../images/user.jpg'
import product from '../../images/product.jpg'

import './AdminPage.scss'
import WithAuthorizeAdmin from '../../components/WithAuthorizeAdmin/WithAuthorizeAdmin'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 8,
  },
})
const AdminPage = (props: any) => {
  const classes = useStyles()
  console.log(props)

  return (
    <div className="admin">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-item-center mt-4 mb-5">
            <h1>Hello Admin</h1>
          </div>
        </div>
        <div className="row ">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-item-center mb-5">
            <Link to="/admin/product-management">
              <Card className="admin__cardContainer">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={product}
                    title="Contemplative Reptile"
                    className="admin__card"
                  />
                  <div className="admin__cardTitle">
                    <p>Product management</p>
                  </div>
                </CardActionArea>
              </Card>
            </Link>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-item-center mb-5">
            <Link to="/admin/customer-management">
              <Card className="admin__cardContainer">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={user}
                    title="Contemplative Reptile"
                    className="admin__card"
                  />
                  <div className="admin__cardTitle">
                    <p>Customer management</p>
                  </div>
                </CardActionArea>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithAuthorizeAdmin(AdminPage)
