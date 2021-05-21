import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SignIn from './Authentication/SignIn'
import MainPage from './MainPage/MainPage'
import SideDrawer from '../components/SideDrawer/Drawer'

export default function Home() {
  return (
    <>
      <MainPage />
    </>
  )
}
