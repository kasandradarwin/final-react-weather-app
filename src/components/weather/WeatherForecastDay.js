import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
    console.log(props.data[0])

    function day() {
        let date = new Date(props.data.time)
        let day = date.getDay();

        let days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat",]

        return days[day]
    }

    return(  
<>
    <div className="WeatherForecast-day"><strong>{day()}</strong></div>
        <WeatherIcon code={props.data.condition.icon} size={36} />
        <div className="weatherForecast-temperature-max"><small> {props.data.condition.description} </small></div>
        <div className="WeatherForecast-temperatures" >
            <span className="weatherForecast-temperature-max"><small>{Math.round(props.data.temperature.maximum)}° <span className="divider">| </span>  </small></span>
            <span className="weatherForecast-temperature-min"> <small>{Math.round(props.data.temperature.minimum)}°</small> </span>
    </div>
</> 


    )
}