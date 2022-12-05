import React from 'react';
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios"

export default function WeatherForecast(props){

    function handleResponse(data) {
        console.log(data)

    };

    const apiKey="9f333b83ab6ed584d401of4c6cef9tc2";
    let units="metric";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=${units}`;
   
    axios.get(apiUrl).then(handleResponse);

    return(
        <div className="WeatherForecast">
          <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">Thurs</div>
                <WeatherIcon code="snow-day" size={20} />
                <div className="WeatherForecast-temperatures" >
                    <span className="weatherForecast-temperature-max"> 19 </span>
                    <span className="weatherForecast-temperature-max"> 10 </span>
                </div>
            </div>
          </div>
        </div>
    
    )
}