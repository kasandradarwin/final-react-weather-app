import React from "react"
import FormattedDate from "../../FormattedDate"
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {

    return(
<>
        <div className="WeatherInfo"></div>
            <h1 className="text-capitalize">{props.data.city}</h1>
            <ul> 
                <li> <FormattedDate date={props.data.date} /> </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-5">
                <div className="col-6">
                    <div className="clearfix">
                        <div className="float-left">
                        <WeatherIcon code={props.data.icon} alt={props.data.description} size={52} />
            
                        <div className="float-left">
                        <WeatherTemperature celsius={props.data.temperature} />
                        </div>
                </div>
                </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li> Humidity: {Math.round(props.data.humidity)}%</li>
                        <li> Wind: {Math.round(props.data.wind)} km/h</li>
                    </ul>
                </div>
            </div>

</> 
        );
    }