import React, { useState, useEffect} from 'react';
import axios from "axios"
import "./WeatherForecast.css";
import WeatherForecastDay from './WeatherForecastDay';

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);

    }, [props.city]);

    function handleResponse(response) {
    
        setForecast(response.data.daily)
        setLoaded(true)

    };

    if (loaded) {
        return (
          <div className="WeatherForecast">
            <div className="row">
              {forecast.map(function (dailyForecast, index) {
                console.log("DAILYFORECAST VARIABLE: ", dailyForecast)
                if (index < 5) {
                  return (
                    <div className="col" key={index}>
                      <WeatherForecastDay data={dailyForecast} />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        );
      } else {

    const apiKey="9f333b83ab6ed584d401of4c6cef9tc2";
    let units="metric";
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}&units=${units}`
   
    axios.get(apiUrl).then(handleResponse);
        
}
}