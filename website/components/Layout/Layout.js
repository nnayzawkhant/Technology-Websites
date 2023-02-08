import React from 'react'
import FirstNav from '../Navbar/FirstNav'
import SecondNav from '../Navbar/SecondNav'
import { useState } from 'react'
import Footer from '../Footer'

const Layout = ({children}) => {

  return (
        <div>
            <SecondNav/>
            {children}
            <Footer/>
        </div>
  )
}

export default Layout