import React from "react"
import FormattedDate from "./FormattedDate"

export default function WeatherInfo(props) {

    return(
<>
        <div className="WeatherInfo"></div>
            <h1 className="text-capitalize">{props.data.city}</h1>
            <ul> 
                {/* <li> {weatherData.date}</li> */}
                {/* <li> <FormattedDate date={weatherData.date} /> </li> */}
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-5">
                <div className="col-6">
                    <div className="clearfix">
                        <img 
                        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
                        alt="party cloudy"
                        className="float-left"/>
                        <div className="float-left">
                            <span className="temperature">{Math.round(props.data.temperature)}</span><span className="unit">°C</span>
                        </div>
                </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li> Humidity: {props.data.humidity}%</li>
                        <li> Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>
            </div>

</> 
        );
    }