import React from 'react'
import '../styles/error.css'
import { useNavigate } from 'react-router-dom'



const Error = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/admin/dashboard')
  }
  return (
    <div className='error__container'>
      <h1>404</h1>
      <p>PAGE NOT FOUND!</p>
      <span>YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</span>
      <button onClick={handleClick}>Back To Home</button>
    </div>
  )
}

export default Error