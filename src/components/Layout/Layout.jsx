import React from 'react'
import "./Layout.css"
import Hero from '../Hero/Hero'

const Layout = () => {
  return (
    <div className='vh-100 layout d-flex justify-content-center align-items-center'>
      <Hero/>
    </div>
  )
}

export default Layout