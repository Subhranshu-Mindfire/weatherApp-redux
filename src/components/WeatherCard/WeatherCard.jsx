import React from 'react'

const WeatherCard = ({dayName,icon,minTemp,maxTemp}) => {
  console.log(dayName,icon,minTemp,maxTemp);
  
  return (
    <div className='weather-card text-white fs-4 fw-semibold px-4'>
      <div className="text-center day">
        {dayName}
      </div>
      <div className="weather-logo text-center">
        <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="" height={100} />
      </div>
      <div className="text-center temp fs-4">
        {maxTemp.toFixed()}&#176; - {minTemp.toFixed()}&#176;
      </div>
    </div>
  )
}

export default WeatherCard