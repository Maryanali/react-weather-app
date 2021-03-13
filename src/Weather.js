import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready: false});

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
      date: new Date(response.data.dt * 1000)
    });
    
  }
  if (weatherData.ready){
    return (  
    <div className="container">
      <div className="weather-app-border">
        <div className="weather-app">
          <h1 id="city">Today's Weather</h1>
          <h2 id="location"> {weatherData.city} </h2>
          <form id="search-form" className="mb-4">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  id="search-input"
                  className="form-control"
                  placeholder="Seach city here.."
                  autoFocus="on"
                  auto-complete="off"
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
            <div className="clearfix weather-temperature">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
                width="100"
                alt="clear"
                className="float-left"
                id="icon"
              />
              <strong className="temperature" id="temperature">
                {" "}
                {Math.round(weatherData.temperature)}
              </strong>{" "}
              <small className="units">
                {" "}
                <a href="#" id="c-link" className="active">
                  {" "}
                  °C{" "}
                </a>
                |{" "}
                <a href="#" id="f-link">
                  {" "}
                  °F{" "}
                </a>
              </small>
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
        <div className="row weather-forecast" id="forecast">
          <div className="col-2">
            <h3>12:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div className="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div className="col-2">
            <h3>15:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div className="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div className="col-2">
            <h3>18:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div className="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div className="col-2">
            <h3>21:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div className="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div className="col-2">
            <h3>00:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div className="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div className="col-2">
            <h3>03:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div className="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div className="col-2">
            <h3>06:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div className="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div className="col-2">
            <h3>09:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div className="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div className="col-2">
            <h3>12:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div className="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div className="col-2">
            <h3>15:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div className="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div className="col-2">
            <h3>18:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div className="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div className="col-2">
            <h3>21:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div className="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
        </div>
        </div>
        <small>
      This project was created by {" "} <a href="https://www.github.com/Maryanali" target="_blank">Maryan Ali </a> {" "}
      and is {" "} <a href="https://www.github.com/Maryanali/react-web-app" target="_blank">Open Source on Github</a> 
    </small>
      </div>
    </div>  
  );
  } else{
  const apiKey = "ac254995f1530b05133bdf3b89d170a4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading..."

  //show loading spinner here instead of saying Loading...
  }
  
 

}