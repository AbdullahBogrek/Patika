import React, { useEffect } from 'react'
import { useWeather } from "../../Context/WeatherContext"
import cities from "../../cities.json"

const Dropdown = () => {
  const { city, setCity } = useWeather()

  useEffect(() => {
    console.log(city)
  }, [city])

  return (
    <div>
      <select name="weather" className='dropdown' onChange={(e) => setCity({lat: e.target.value.split("+")[0], lon: e.target.value.split("+")[1]})}>
        {cities.map((city, index) => (
          <option key={index} value={city.latitude + "+" + city.longitude}>{city.name}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown