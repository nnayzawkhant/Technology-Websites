import React from 'react'
import { Outlet } from 'react-router-dom'

const ErrorMessage = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default ErrorMessage