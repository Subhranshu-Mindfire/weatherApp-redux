import React from 'react'
import "./Middle.css"

const Middle = () => {
  return (
    <div className='middle d-flex justify-content-between p-5'>
      <div className='left d-flex'>
        <div className="temp text-white fw-medium m-auto">
          17
        </div>
        <div className="ms-3 condition fs-3 text-white fw-medium d-flex flex-column justify-content-center">
          <div>&#176;C</div>
          <div className='fs-3 '>Partly Cloudy</div>
        </div>
      </div>
      <div className="right d-flex">
        <div className='logo'>
          <img src={"https://openweathermap.org/img/wn/10d@4x.png"} style={{width:"250px"}} alt="" className='' />
        </div>
        <div className="desc text-white fw-semibold d-flex flex-column justify-content-center fs-4">
          <div className="feels-like my-1"> Feels Like: 31&#176;C</div>
          <div className="wind my-1">Wind: 3 km/h</div>
          <div className="humidity my-1">Humidity: 50</div>
        </div>
      </div>
    </div>
  )
}

export default Middle