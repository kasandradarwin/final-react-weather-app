import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate"

export default function Weather(props){
    // const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({ready:false});
    const [temperature, setTemperature] = useState(null);
    
    
    function handleResponse(response){
        setTemperature(response.data.temperature.current);
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            iconUrl: response.data.condition.icon_url,
            wind: response.data.wind.speed, 
            city: response.data.city,
            date: new Date(response.data.time) * 1000,
            description: response.data.condition.description,

        });
    console.log(response)
    // console.log(response.data)
}
if (weatherData.ready) {
    return (
        <div className="Weather"> 
        <form>
        <div className="row">
            <div className="col-9">
            <input 
            type="search" 
            placeholder="Enter a city.." 
            className="form-control"
            autoFocus="on"
            />
            </div>
            <div className="col-3">
            <input 
            type="submit" 
            value="search" 
            className="btn btn-outline-dark w-100" /> 
        </div>
        </div>
        </form>
        <h1 className="text-capitalize">{weatherData.city}</h1>
        <ul> 
            {/* <li> {weatherData.date}</li> */}
            {/* <li> <FormattedDate date={weatherData.date} /> </li> */}
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-5">
            <div className="col-6">
                <div className="clearfix">
                    <img 
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
                    alt="party cloudy"
                    className="float-left"/>
                    <div className="float-left">
                        <span className="temperature">{Math.round(temperature)}</span><span className="unit">°C</span>
                    </div>
            </div>
            </div>
            <div className="col-6">
                <ul>
                    <li> Precipitation: {weatherData.precipitation}%</li>
                    <li> Humidity: {weatherData.humidity}%</li>
                    <li> Wind: {weatherData.wind} km/h</li>
                </ul>
            </div>
        </div>
        </div>

    ) 
} else {
    const apiKey="9f333b83ab6ed584d401of4c6cef9tc2"
    let units="metric"
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`
   
    axios.get(apiUrl).then(handleResponse);

     return( "loading...")

}

    
}