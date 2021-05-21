import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { BrowserRouter as Router } from 'react-router-dom'
import { Router } from 'react-router-dom'

import App from './App'
import * as serviceWorker from './serviceWorker'
import makeStore from './redux/store'
import axios from 'axios'
import { createBrowserHistory } from 'history'

import { logout } from './redux/actions/authentication'

const store = makeStore()
const history = createBrowserHistory()

// let token = localStorage.getItem('token')
// if (token) {
//   console.log('token is here', token)
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
// }

axios.interceptors.response.use(
  function (config) {
    return config
  },
  function (error) {
    if (error.response.status === 401) {
      // dispatch action push user back to signin
      store.dispatch(logout(history))
    }
    return Promise.reject(error)
  }
)

axios.interceptors.request.use((request) => {
  const token = localStorage.getItem('token')
  request.headers['Authorization'] = `Bearer ${token}`
  return request
})

const WithProvider = () => (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)

axios.defaults.baseURL = 'http://localhost:5001/api/v1/'
ReactDOM.render(<WithProvider />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
