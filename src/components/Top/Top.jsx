import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCity, setCityName, fetchWeatherByCoordinates, fetchForecastByCoordinates } from '../../features/weather/weatherSlice'
import "./Top.css"

const Top = () => {
  const [city, setCity] = useState("")
  const cityResults = useSelector((state)=>state.weather.cityResults)
  const cityName = useSelector((state)=> state.weather.cityName)
  const dispatch = useDispatch()
  const [date, setDate] = useState(new Date())
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];


  useEffect(() => {
    if (city != ""){
      dispatch(fetchCity(city))
    }
  }, [city])

  useEffect(() => {
    dispatch(fetchWeatherByCoordinates({lat: "20.2960", lon: "85.8246"})),
    dispatch(fetchForecastByCoordinates({lat: "20.2960", lon: "85.8246"}))
  }, [])
  

  setInterval(() => {
    setDate(new Date())
  }, 1000);

  const handleClick = (city,lat,lon) => {
    dispatch(setCityName(city))
    setCity("")
    dispatch(fetchWeatherByCoordinates({lat,lon}))
    dispatch(fetchForecastByCoordinates({lat,lon}))
  }

  return (
    <div className='d-flex p-5 top'>
      <div className="left">
        <div className="place h1 text-white">
          {cityName}
        </div>
        <div className="h5 text-white">
          {dayNames[date.getDay("en-US")]}, &nbsp; 
          {new Intl.DateTimeFormat('en-GB', { year: "numeric", month: "short", day: "2-digit" }).format(new Date).split(" ").join(" ")} |  &nbsp;
          {date.toLocaleString("en-US", { hour: 'numeric', minute: 'numeric',second: 'numeric', hour12: true })}<br />
        </div>
      </div>
      <div className="right">
        <div className="search position-absolute start-60 bg-light-subtle rounded-4">
        <input type="text" className='form-control fs-4 rounded-4' placeholder='Search for city' value={city} onChange={(e)=>setCity(e.target.value)}/>
        <div>
        {city && cityResults.map((city)=>(
          <div role="button" className='fs-4 bg-light-subtle border d-flex justify-content-between text-dark px-2 rounded-bottom-4 border-0 px-3 py-1' onClick={() => handleClick(city.name,city.lat,city.lon)}><div>{city.name}</div> 
          <div className='text-secondary fs-5 my-auto'>
            {city.state} {city.country}
          </div></div>
        ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Top