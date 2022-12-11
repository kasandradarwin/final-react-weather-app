import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props){

    function day() {
        let date = new Date(props.data.time * 1000)
        let day = date.getDay();
        
        let days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat",]
        console.log("DATE",date)
        console.log("DAY",day)
        console.log("+++++++++++",date)

        // console.log(props)
        return days[day]
    }

    return(  
<>
    <div className="WeatherForecast-day"><strong>{day()}</strong></div>
    {/* { console.log("***************************",props.data.time) } */}
        <WeatherIcon code={props.data.condition.icon} size={100} />
        {/* {console.log()} */}
        <div className="weatherForecast-temperature-max"><small> {props.data.condition.description} </small></div>
        <div className="WeatherForecast-temperatures" >
            <span className="weatherForecast-temperature-max"><small>{Math.round(props.data.temperature.maximum)}° <span className="divider">| </span>  </small></span>
            <span className="weatherForecast-temperature-min"> <small>{Math.round(props.data.temperature.minimum)}°</small> </span>
    </div>
</> 


    )
}