import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Comments = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/comments/commentsviews', { replace : true })
  }, [])
  return (
    <div>
      <h1>COMMENTS</h1>
      <Outlet/>
    </div>
  )
}

export default Comments