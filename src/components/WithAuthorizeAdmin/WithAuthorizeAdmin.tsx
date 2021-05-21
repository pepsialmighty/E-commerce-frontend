import React from 'react'
import { useSelector } from 'react-redux'
import jwt from 'jsonwebtoken'

import NotFound from '../NotFound404/NotFound'
import { AppState } from '../../types'

const WithAuthorizeAdmin = (WrappedComponent: any) => {
  const NewComponent = (props: any) => {
    const userInfo = useSelector(
      (state: AppState) => state.authentication.userInfo
    )
    return (
      <>
        {userInfo && userInfo.isAdmin ? (
          <WrappedComponent userInfo={userInfo} {...props} />
        ) : (
          <NotFound />
        )}
      </>
    )
  }
  return NewComponent
}

export default WithAuthorizeAdmin
