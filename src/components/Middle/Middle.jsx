import React, { useState } from 'react'
import "./Middle.css"
import { useSelector } from 'react-redux'

const Middle = () => {
  const weatherData = useSelector((state) => state.weather.weatherData)

  const [toogleTemp, settoogleTemp] = useState(true)

  return (
    <div className='middle d-flex justify-content-between p-5'>
      <div className='left d-flex'>
        <div className="temp text-white fw-medium m-auto">
          {toogleTemp ? (weatherData?.main?.temp - 273).toFixed(0) : weatherData?.main?.temp?.toFixed(0)}
        </div>
        <div className="ms-3 condition fs-3 text-white fw-medium d-flex flex-column justify-content-center">
          <div>
            <span role={!toogleTemp && `button`} className={!toogleTemp && `opacity-50`} onClick={() => settoogleTemp(!toogleTemp)}>&#176;C</span> | 
            <span role={toogleTemp && `button`} className={toogleTemp && `opacity-50`} onClick={() => settoogleTemp(!toogleTemp)}>&#176;F</span>
          </div>
          <div className='fs-3'>
            {weatherData?.weather?.[0]?.description}
          </div>
        </div>
      </div>
      <div className="right d-flex">
        <div className='logo'>
          <img src={`https://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@4x.png`} style={{ width: "250px" }} alt="" className='' />
        </div>
        <div className="desc text-white fw-semibold d-flex flex-column justify-content-center fs-4">
          <div className="feels-like my-1"> <i class="fa-solid fa-temperature-three-quarters"></i> Feels Like: {toogleTemp ? (weatherData?.main?.feels_like - 273).toFixed(0) : weatherData?.main?.feels_like?.toFixed(0)}&#176;C</div>
          <div className="wind my-1"> <i class="fa-solid fa-wind"></i> Wind: {weatherData?.wind?.speed} km/h</div>
          <div className="humidity my-1"><i class="fa-solid fa-droplet"></i> Humidity: {weatherData?.main?.humidity}</div>
        </div>
      </div>
    </div>
  )
}

export default Middle