import React, { useState, useEffect } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Button from '@material-ui/core/Button'
import { Backdrop, CircularProgress, IconButton } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import './User.scss'
import axios from 'axios'
import MyBackDrop from '../../components/MyBackDrop/MyBackDrop'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  })
)

const UserProfile = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleToggle = () => {
    setOpen(!open)
  }
  useEffect(() => {
    axios.get('/users/profile')
  }, [])

  const token = localStorage.getItem('token')

  return (
    <>
      {token ? (
        <div className="profile__container container">
          <div className="row profile__section">
            <IconButton
              aria-label="Sign in"
              color="inherit"
              className="profile__nav__backBtn col-1"
            >
              <ArrowBackIosIcon />
            </IconButton>
            <h1 className="col-11">My Account</h1>
          </div>

          <div className="row mt-4 profile__section">
            <div className="profile__avatar col-2">
              <img
                src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                alt=""
                className="profile__image "
              />
            </div>
            <div className="col-6 mt-1">
              <h3>Nguyen Nguyen</h3>
              <h5>User</h5>
            </div>
          </div>
          <div className="profile__content mt-4 profile__section">
            <div className="display display__name  ">
              <div className="row">
                <div className="col-12">
                  <p>DisplayName</p>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <p>Nguyen Nguyen</p>
                </div>
                <div className="col-4">
                  <button type="button" className="btn btn-dark">
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="display display__email">
              <div className="row">
                <div className="col-12">
                  <p>DisplayName</p>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <p>Nguyen Nguyen</p>
                </div>
                <div className="col-4">
                  <button type="button" className="btn btn-dark">
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="display display__password">
              <div className="row">
                <div className="col-12">
                  <p>DisplayName</p>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <p>Nguyen Nguyen</p>
                </div>
                <div className="col-4">
                  <button type="button" className="btn btn-dark">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <MyBackDrop />
      )}
    </>
  )
}

export default UserProfile
