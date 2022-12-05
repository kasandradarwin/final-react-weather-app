import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo"
// import WeatherIcon from "./WeatherIcon"
import WeatherForecast from "./WeatherForecast"


export default function Weather(props){
    // const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({ready:false});
    // const [temperature, setTemperature] = useState(null);
    const [city, setCity] = useState(props.defaultCity)
    
    
    function handleResponse(response){
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            icon: response.data.condition.icon,
            wind: response.data.wind.speed, 
            city: response.data.city,
            date: response.data.time,
            description: response.data.condition.description,
            
        });
        // console.log(data.time)
        // console.log("DATA:" , response.data.time)
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search(city);
    
    }

    function search() {
        const apiKey="9f333b83ab6ed584d401of4c6cef9tc2"
        let units="metric"
        let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`
       
        axios.get(apiUrl).then(handleResponse);
    }

    function handleCityChange(event) {
        setCity(event.target.value)
    }

    if (weatherData.ready) {
        return (
            <div className="Weather"> 
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-9">
            <input 
            type="search" 
            placeholder="Enter a city.." 
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
       <WeatherForecast />
        </div>

    ) 
} else {
   
    search();
     return( "loading...")

}

    
}