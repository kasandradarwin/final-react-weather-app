import './App.css';
import Weather from './components/weather/Weather';


export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <Weather defaultCity="Nanaimo" />
      <footer>
        This project was coded by Kasandra D and is {" "}
      
      <a href="https://github.com/kasandradarwin/final-react-weather-app" target="_blank" rel="noreferrer">
         open-sourced on Github
      </a>
    
      
      </footer>
      </div>
    </div>
  );
}

