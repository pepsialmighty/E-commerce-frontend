import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
} from '../../types/users.type'
import { Dispatch } from 'redux'
import axios from 'axios'

export const getAllUser = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_USERS_REQUEST })

    const { data } = await axios.get('/users')
    console.log(data)

    dispatch({ type: GET_ALL_USERS_SUCCESS, payload: { users: data } })
  } catch (error) {
    dispatch({
      type: GET_ALL_USERS_FAIL,
      payload: {
        error:
          error.response && error.respone.data.message
            ? error.respone.data.message
            : error.message,
      },
    })
  }
}
