import React from 'react'
import "./Hero.css"
import Top from '../Top/Top'
import Middle from '../Middle/Middle'
import Bottom from '../Bottom/Bottom'

const Hero = () => {
  return (
    <div className='hero container rounded-5'>
      <Top/>
      <Middle/>
      <Bottom/>
    </div>
  )
}

export default Hero