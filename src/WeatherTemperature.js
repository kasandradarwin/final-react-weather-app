import React, { useState } from "react"

export default function WeatherTemperature(props){

    const [unit, setUnit] = useState("celsius")

    function toFahr(event){
        event.preventDefault()
        setUnit("fahrenheit")

    }

    function toCels(event){
        event.preventDefault()
        setUnit("celsius")

    }

    if (unit === "celsius") {
    return(
        <div className="WeatherTemperature">
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="unit">°C | <a href="/" onClick={toFahr}>°F</a> </span>
        </div>
    )

    } else {
        let fahrenheit = ((props.celsius * 9/5) + 32)
        return(
            <div className="WeatherTemperature">
            <span className="temperature">{Math.round(fahrenheit)}</span>
            <span className="unit"><a href="/" onClick={toCels}>°C</a>  | °F</span>
        </div>
        )

    }
}
