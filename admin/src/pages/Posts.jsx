import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Posts = () => {

  const navigate = useNavigate()


  useEffect(() => {
    navigate('/posts/postsviews', { replace : true })
  }, [])
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Posts