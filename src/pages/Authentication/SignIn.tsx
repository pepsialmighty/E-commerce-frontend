import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {
  loginSuccess,
  loginFailed,
  verifiedAdmin,
} from '../../redux/actions/authentication'
import { AppState } from '../../types'
import { Redirect, useHistory } from 'react-router-dom'

import './Authentication.scss'

const SignIn = () => {
  const [logInValue, setlogInValue] = useState({
    email: '',
    password: '',
  })

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const token = useSelector(
    (state: AppState) => state.authentication.accessToken
  )

  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    axios
      .post('users/signin', logInValue)
      .then((res) => {
        if (res.status === 200) {
          console.log(res)
          dispatch(loginSuccess(res.data, history))
          // dispatch(verifiedAdmin(res.data.isAdmin))
        } else {
          dispatch(loginFailed('Please try again'))
        }
      })
      .catch((err) => dispatch(loginFailed(err)))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setlogInValue({ ...logInValue, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    token ? setIsAuthenticated(true) : setIsAuthenticated(false)
  }, [token])

  // if (isAuthenticated) {
  //   return <Redirect to="/profile" />
  // }

  return (
    <div className="form-wrapper ">
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group mb-3">
          <label>Email</label>
          <input
            type="email"
            value={logInValue.email}
            name="email"
            className="form-control"
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="form-group mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={logInValue.password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <button className="btn btn-primary btn-block">Sign In</button>
      </form>
    </div>
  )
}

export default SignIn
