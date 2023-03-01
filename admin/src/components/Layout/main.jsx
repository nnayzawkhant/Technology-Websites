import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import ProtectedRoute from '../../ProtectedRoute'

const Main = () => {
  return (
    <ProtectedRoute>
      <Sidebar>
        <Outlet/>
      </Sidebar>
    </ProtectedRoute>
  )
}

export default Main