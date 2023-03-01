import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Comments = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/admin/comments/commentsviews', { replace : true })
  }, [])
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Comments