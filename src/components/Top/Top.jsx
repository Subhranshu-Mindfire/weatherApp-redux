import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCity } from '../../features/weather/weatherSlice'
import "./Top.css"

const Top = () => {
  const [city, setCity] = useState("")
  const cityResults = useSelector((state)=>state.weather.cityResults)
  const dispatch = useDispatch()

  useEffect(() => {
    if (city != ""){
      dispatch(fetchCity(city))
    }
  }, [city])
  

  return (
    <div className='d-flex p-5 top'>
      <div className="left">
        <div className="place h1 text-white">
          Bhubaneswar
        </div>
        <div className="h5 text-white">
          Friday, 28 March 2025 | 01 : 11 PM
        </div>
      </div>
      <div className="right">
        <div className="search position-absolute start-60 bg-light-subtle rounded-4">
        <input type="text" className='form-control fs-4 rounded-4' placeholder='Search for city' value={city} onChange={(e)=>setCity(e.target.value)}/>
        <div>
        {city && cityResults.map((city)=>(
          <div className='fs-4 bg-light-subtle border d-flex justify-content-between text-dark px-2 rounded-bottom-4 border-0 px-3 py-1'><div>{city.name}</div> 
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