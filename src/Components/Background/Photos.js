import React from 'react'
import { useWeather } from '../../Context/WeatherContext'

function Photos() {
  const {havadurumu}=useWeather()
    switch(havadurumu.weather && havadurumu.weather[0].main ){
        case "rain":
            return <img className='arkaplan' src="https://wallpaperaccess.com/full/134824.jpg" alt="" />
        case "Drizzle":
            return <img className='arkaplan' src="https://c1.wallpaperflare.com/preview/982/591/656/rain-drops-city-streets-drizzle.jpg" alt="" />
        case "Clear":
            return <img className='arkaplan' src="https://cdn.mwallpapers.com/photos/celebrities/nature/clear-blue-sky-panorama-4k-hd-desktop-wallpaper-for-4k-ultra-hd-android-iphone-hd-wallpaper-background-downloadhd-wallpapers-desktop-background-android-iphone-1080p-4k-ckzj0.jpg" alt="" />
        case "Mist":
            return <img className='arkaplan' src="https://wallpapershome.com/images/wallpapers/austria-3840x2160-4k-5k-wallpaper-8k-forest-fog-mist-pines-6203.jpg" alt="" />
        case "Snow":
            return <img className='arkaplan' src="https://wallpaperaccess.com/full/419101.jpg" alt="" />
        case "Storm":
            return <img className='arkaplan' src="https://i.ytimg.com/vi/NkvBZJk000k/maxresdefault.jpg" alt="" />
        case "Clouds":
            return <img className='arkaplan' src="https://www.wkbn.com/wp-content/uploads/sites/48/2022/07/clouds-cloudy-sky-spring-summer-fall-winter-weather-generic-8.jpg?w=1280" alt="" />
        default:
            return <img className='arkaplan' src="https://www.wkbn.com/wp-content/uploads/sites/48/2022/07/clouds-cloudy-sky-spring-summer-fall-winter-weather-generic-8.jpg?w=1280" alt="" />
    
      }
  
}

export default Photos
