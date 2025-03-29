import React from 'react'
import "./Hero.css"
import Top from '../Top/Top'
import Middle from '../Middle/Middle'

const Hero = () => {
  return (
    <div className='hero h-75 w-75'>
      <Top/>
      <Middle/>
    </div>
  )
}

export default Hero