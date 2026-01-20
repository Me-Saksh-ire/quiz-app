import React from 'react'
import Nav from '../components/Nav.jsx'
import Content from './Content.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

export default Layout
