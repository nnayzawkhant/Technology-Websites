import React, { useEffect } from 'react'
import Category from '../components/categories/categoriesViews/CategoryViews'
import { Outlet } from 'react-router-dom'
import CategoriesViews from '../components/categories/categoriesViews/CategoryViews'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/categories/categoriesviews', { replace : true })
  }, [])
 
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Categories