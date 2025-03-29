import React from 'react'

const WeatherCard = () => {
  return (
    <div className='weather-card text-white fs-4 fw-semibold px-4'>
      <div className="text-center day">
        Thursday
      </div>
      <div className="weather-logo">
        <img src={"https://openweathermap.org/img/wn/10d@4x.png"} alt="" height={100} />
      </div>
      <div className="text-center temp">
        43&#176; - 31&#176;
      </div>
    </div>
  )
}

export default WeatherCard