import React from 'react'
import "./Bottom.css"
import WeatherCard from '../WeatherCard/WeatherCard'
import { useSelector } from 'react-redux'
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];

const Bottom = () => {
  const forecastData = useSelector((state) => state.weather.forecastData)
  return (
    <div className='bottom'>
      <div className="bottom-hero m-5 p-4 rounded-5 d-flex justify-content-between">
        {forecastData?.list?.map((hour) =>
            (new Date(hour.dt_txt)).getHours("en-US") == 12 ?
              // <div className='card bg-white text-dark py-2 px-4 d-flex flex-column gap-3 text-center'>
              //   <div className="top">
              //     {dayNames[(new Date(hour.dt_txt)).getDay("en-US")]}
              //   </div>
              //   <div className="middle fs-2">
              //     &nbsp;{(hour?.main?.temp - 273).toFixed()}&deg;
              //   </div>
              //   <div className="bottom opacity-50">
              //     {hour.weather?.[0]?.main}
              //   </div>
              // </div>
              <WeatherCard dayName={dayNames[(new Date(hour.dt_txt)).getDay("en-US")]} icon={hour?.weather?.[0]?.icon} minTemp={hour?.main?.temp_min} maxTemp={hour.main.temp_max} />
              :
              <></>
          )}
      </div>
    </div>
  )
}

export default Bottom