import React from 'react'
import "./Bottom.css"
import WeatherCard from '../WeatherCard/WeatherCard'

const Bottom = () => {
  return (
    <div className='bottom'>
      <div className="bottom-hero m-5 p-4 rounded-5 d-flex justify-content-between">
        {Array(5).fill().map(()=><WeatherCard/>)}
      </div>
    </div>
  )
}

export default Bottom