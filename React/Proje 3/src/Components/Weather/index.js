import axios from 'axios'
import { useEffect } from 'react'
import { useWeather } from '../../Context/WeatherContext'

const Weather = () => {
  const {city, weathers, setWeathers} = useWeather()
 
  const getWeather = async (lat, lon) => {
    const base = process.env.REACT_APP_API_BASE_URL
    const key = process.env.REACT_APP_API_KEY
    try {
      const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lat}&appid=${key}&cnt=7&units=metric`)
      console.log(data.list)
      setWeathers(data.list)
    } catch (error) {
      alert("Error: ", error)
    }
  }

  useEffect(() => {
    getWeather(city.lat, city.lon)
  }, [city])

  return (
    <div className='weather'>
      {weathers.map((weather, index) => (
        <div key={index} className='weather-daily'>
          <h3>{new Date(weather.dt)}</h3>
          <i><img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/></i>
          <h3><span>{weather.main.temp}</span><span>{weather.main.feels_like}</span></h3>
        </div>
      ))}
    </div>
  )
}

export default Weather