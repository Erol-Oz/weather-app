import {useState} from 'react'
import { useWeather } from '../../Context/WeatherContext';
function Search() {
    const {havadurumu, belirtHavaDurumu}=useWeather()
    const api={
        key:"31ec2446680693843f70b4b744fe540a",
        base:"https://api.openweathermap.org/data/2.5/weather"
    };

    const [araParametre,BelirtAraParametre]=useState("")
    const ara=(e)=>{
      if(e.key==="Enter"){
        fetch(`${api.base}?q=${araParametre}&units=metric&lang=tr&appid=${api.key}`)
        .then((veri)=>veri.json())
        .then((sonuc)=>{
          BelirtAraParametre("");
          belirtHavaDurumu(sonuc)
          
        })
      }
    }

  return (
    <div className='arama'>
        <input className='arama-input' 
        type="text" 
        placeholder='şehir'
        onChange={(e)=>BelirtAraParametre(e.target.value)}
        value={araParametre}
        onKeyPress={ara} 
        />
        
        
    </div>
  )
}

export default Search