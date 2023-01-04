import {createContext,useContext,useState} from 'react'
const WeatherContext=createContext()
export const WeatherProvider=({children})=>{
    const [havadurumu, belirtHavaDurumu] =useState({});
    const values={havadurumu,belirtHavaDurumu}
    return(
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    )
}
export const useWeather=()=>useContext(WeatherContext)