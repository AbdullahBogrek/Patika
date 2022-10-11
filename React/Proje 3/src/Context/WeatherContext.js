import { createContext, useState, useContext } from "react";

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState({lat: "41.015137", lon: 28.979530})
    const [weathers, setWeathers] = useState([])

    const values = {
        weathers,
        setWeathers,
        city,
        setCity
    }

    return (
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    )
}

export const useWeather = () => useContext(WeatherContext)