import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUser } from '../../redux/actions'
import { AppState } from '../../types'

const CustomerManagement = () => {
  const dispatch = useDispatch()

  const users = useSelector((state: AppState) => state.users)

  useEffect(() => {
    dispatch(getAllUser())
  }, [])

  return <div>CustomerManagement</div>
}

export default CustomerManagement
