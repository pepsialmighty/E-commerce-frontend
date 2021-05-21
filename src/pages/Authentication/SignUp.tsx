import React, { useState, useEffect, ChangeEvent } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'

const SignUp = () => {
  const [signUpValue, setsignUpValue] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [redirect, setRedirect] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    axios
      .post('users/signup', signUpValue)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

    setRedirect(true)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setsignUpValue({ ...signUpValue, [event.target.name]: event.target.value })
  }

  if (redirect) {
    return <Redirect to="/signin" />
  }

  return (
    <div className="form-wrapper">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Username</label>
          <input
            type="text"
            value={signUpValue.username}
            name="username"
            className="form-control"
            onChange={handleChange}
            placeholder="Username"
          />
        </div>
        <div className="form-group mb-3">
          <label>Email</label>
          <input
            type="email"
            value={signUpValue.email}
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
            value={signUpValue.password}
            name="password"
            className="form-control"
            onChange={handleChange}
            placeholder="Password"
          />
        </div>

        <button className="btn btn-primary btn-block">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
