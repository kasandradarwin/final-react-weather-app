import React from "react"
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){
    const codeMapping = {
        "clear-sky-day" : "CLEAR_DAY",
        "clear-sky-night" : "CLEAR_NIGHT",
        "few-clouds-day" : "PARTLY_CLOUDY_DAY",
        "few-clouds-night" : "PARTLY_CLOUDY_NIGHT",
        "scattered-clouds-day" : "CLOUDY" || "FOG",
        "shower-rain-day" : "RAIN",
        "snow-day" : "SLEET" || "SNOW",
        "mist-day" : "WIND",

    }

    return(
        <ReactAnimatedWeather
            icon={codeMapping[props.code]}
            color='black'
            size={props.size}
            animate={true}
          />

    );

}