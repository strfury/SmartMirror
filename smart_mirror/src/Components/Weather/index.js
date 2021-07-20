import React, { useState, useEffect} from "react";
import axios from 'axios';

const createPath =(iconID)=>{
    return("./assets/weatherParts/" + iconID + ".png");
}
const toFahrenheit = (rawTemp)=>{
    return((rawTemp - 273.15)* 1.8 + 32);
}
const Weather = ()=>{
    const [currentWeather, setCurrentWeather] = useState(0);
    const [currentStatus, setCurrentStatus] = useState('0');
    const [currentIcon, setCurrentIcon] = useState('0')
    const Interval = setInterval( ()=>{
        axios.get('https://api.openweathermap.org/data/2.5/weather?zip=95129&appid=569eaf46ecde7a3bf581654fc9f6e12b')
        .then(function (response) {
         // handle success
        console.log(response);
        setCurrentWeather(Math.round(toFahrenheit(response.data.main.temp)));
        setCurrentStatus((response.data.weather[0].main).toLowerCase());
        setCurrentIcon(response.data.weather[0].icon);
        })

        .catch(function (error) {
        // handle error
        console.log(error);
        })
    }, 6e5);
    useEffect(()=>{
        axios.get('https://api.openweathermap.org/data/2.5/weather?zip=95129&appid=569eaf46ecde7a3bf581654fc9f6e12b')
        .then(function (response) {
         // handle success
        console.log(response);
        setCurrentWeather(Math.round(toFahrenheit(response.data.main.temp)));
        setCurrentStatus((response.data.weather[0].main).toLowerCase());
        setCurrentIcon(response.data.weather[0].icon);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        return()=>{
            clearInterval(Interval);
        }

    }, [])
    
  return(
  <div>
      <img src={createPath(currentIcon)}></img>
      <p>{currentWeather}°F - {currentStatus}</p>
  </div>)
}
export default Weather;