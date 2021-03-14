import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature:response.data.main.temp,
      wind: response.data.wind.speed,
      humidity:response.data.main.humidity,
      pressure:response.data.main.pressure,
      description:response.data.weather[0].description,
      city:response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon
    });  
  }
  function search(){
    const apiKey = "ac254995f1530b05133bdf3b89d170a4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
    //the value of input is stored inside a state
    setCity(event.target.value);
  }

  if (weatherData.ready){
    return (  
    <div className="container">
      <div className="weather-app-border">
        <div className="weather-app">
          <h1 id="city">Today's Weather</h1>
          <h2 id="location"> {weatherData.city} </h2>
          <form id="search-form" className="mb-4" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  id="search-input"
                  className="form-control"
                  placeholder="Seach city here.."
                  autoFocus="on"
                  auto-complete="off"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <button type="submit" value="Search" className="btn btn-light">
                  Search
                </button>
              </div>
            </div>
          </form>
        <div className="weather-app-spacing2">
          <ul>
            <li id="temperature-description">{weatherData.description}</li>
            <li>
                <FormattedDate date={weatherData.date} />
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature float-left">

              
              <WeatherIcon code={weatherData.icon} />

              <WeatherTemperature celsius={weatherData.temperature} />
              
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li id="temperature-pressure">Pressure: {weatherData.pressure} hPa</li>
              <li id="temperature-humidity">Humidity: {weatherData.humidity} % </li>
              <li id="temperature-humidity">Wind: {weatherData.wind} km/h</li>
              
            </ul>
          </div>
        </div>
       <WeatherForecast city={weatherData.city}/>
        </div>
        <small>
      This project was created by {" "} <a href="https://www.github.com/Maryanali" target="_blank">Maryan Ali </a> {" "}
      and is {" "} <a href="https://www.github.com/Maryanali/react-web-app" target="_blank">Open Source on Github</a> 
    </small>
      </div>
    </div>  
  );
  } else{
  search();
  return "Loading..."
  //show loading spinner here instead of saying Loading...
  }
  
}