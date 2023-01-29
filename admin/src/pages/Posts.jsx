import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Posts = () => {

  const navigate = useNavigate()


  useEffect(() => {
    navigate('/posts/postsviews', { replace : true })
  }, [])
  return (
    <div>
      <h1>POSTS</h1>
      <Outlet />
    </div>
  )
}

export default Posts