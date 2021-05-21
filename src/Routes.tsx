import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import SignIn from './pages/Authentication/SignIn'
import SignUp from './pages/Authentication/SignUp'
import CartPage from './pages/CartPage/CartPage'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'

import Home from './pages/Home'
import NavBar from './components/NavBar/NavBar'
import ProductPage from './pages/ProductPage/ProductPage'
import SideDrawer from './components/SideDrawer/Drawer'
import UserProfile from './pages/UserProfilePage/UserProfile'
import AdminPage from './pages/AdminPage/AdminPage'
import CustomerManagement from './pages/CustomerManagement/CustomerManagement'
import ProductManagementPage from './pages/ProductManagement/ProductManagementPage'
import withAuthorizeAdmin from './components/WithAuthorizeAdmin/WithAuthorizeAdmin'

const Routes = () => {
  const [token, setToken] = useState()

  // if (!token) {
  //   return (
  //     <SignIn
  //     // setToken={setToken}
  //     />
  //   )
  // }

  return (
    <div>
      <NavBar />
      <div style={{ height: 32 }}></div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/profile" component={UserProfile} />
        {/* <Route exact path="/admin" component={withAuthorizeAdmin(AdminPage)}>
         
        </Route> */}
        <Route exact path="/admin" component={AdminPage} />
        <Route
          exact
          path="/admin/product-management"
          component={ProductManagementPage}
        />
        <Route
          exact
          path="/admin/customer-management"
          component={CustomerManagement}
        />

        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/checkout" component={CheckoutPage} />

        <Route exact path="/products/:id" component={ProductPage} />
      </Switch>
    </div>
  )
}

export default Routes
