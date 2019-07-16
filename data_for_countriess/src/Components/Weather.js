import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = (props) =>{
const {name} = props
const baseURL = 'http://api.apixu.com/v1/current.json?key=ddc2736d894d457ca0b05225191607&q='

const [ weather, setWeather] = useState({
    temp : "",
    wind:"",
    direction: "",
    link: ""
})

const hook = () => {
    console.log('effect2')
    axios.get(baseURL + name)
    .then( resource =>{
        console.log('success2')
        const w = resource.data
        setWeather( {
            temp : w.current.temp_c,
            wind: w.current.wind_kph,
            direction: w.current.wind_dir,
            link:"https:" + w.current.condition.icon
        })
        
    })
}
useEffect( hook,[])

return(
    <div>
        {weather !== ''  ?
        <div> 
           <h2>Weather in {name}</h2> 
           <strong>temperature: {weather.temp}  celcius </strong>
            <br />
            <img  width="200px"alt="weather" src={weather.link} />
            <br />
           <strong>wind: {weather.wind} kph direction {weather.direction} </strong>
            
         </div>    : ''}

    </div>
)
}

export default Weather