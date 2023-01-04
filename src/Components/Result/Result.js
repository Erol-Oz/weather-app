import React from 'react'
import { useWeather } from '../../Context/WeatherContext';
function Result() {
    const {havadurumu}=useWeather()
    return (
        <>
            {typeof havadurumu.main != 'undefined' && (
                <div className='sonuc'>
                    <div className='sehir'>{havadurumu.name} {havadurumu.sys.country} </div>
                    <div className='detay'>
                        <div className='derece'>  { Math.round(havadurumu.main.temp) } °C </div>
                        <div className='statu'> {havadurumu.weather[0].description} </div>
                    </div>
                </div>
            )}
        </>
    );
}



export default Result
