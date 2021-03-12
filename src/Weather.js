import React from "react";
import "./Weather.css";

export default function Weather(){
  return (  
    <div className="App">
    <div class="container">
      <div class="weather-app-border">
        <div class="weather-app">
          <h1 id="city">Today's Weather</h1>
          <h2 id="location"> Location </h2>
          <form id="search-form" class="mb-4">
            <div class="row">
              <div class="col-9">
                <input
                  type="search"
                  id="search-input"
                  class="form-control"
                  placeholder="Seach city here.."
                  autofocus="on"
                  auto-complete="off"
                />
              </div>
              <div class="col-3">
                <button type="submit" value="Search" class="btn btn-light">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="weather-app-spacing2">
          <ul>
            <li id="temperature-description">Description</li>
            <li>
              {" "}
              Last updated:
              <span id="date"> </span>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="clearfix weather-temperature">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
                width="100"
                alt="Icon of current weather"
                alt="clear"
                class="float-left"
                id="icon"
              />
              <strong class="temperature" id="temperature">
                {" "}
                12
              </strong>{" "}
              <small class="units">
                {" "}
                <a href="#" id="c-link" class="active">
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
          <div class="col-6">
            <ul>
              <li id="temperature-pressure">Pressure:</li>
              <li id="temperature-humidity">Humidity:</li>
              <li>
                {" "}
                <span id="wind"></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="row weather-forecast" id="forecast">
          <div class="col-2">
            <h3>12:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div class="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div class="col-2">
            <h3>15:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div class="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div class="col-2">
            <h3>18:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div class="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div class="col-2">
            <h3>21:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div class="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div class="col-2">
            <h3>00:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div class="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div class="col-2">
            <h3>03:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div class="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div class="col-2">
            <h3>06:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div class="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div class="col-2">
            <h3>09:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div class="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div class="col-2">
            <h3>12:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div class="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div class="col-2">
            <h3>15:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div class="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div class="col-2">
            <h3>18:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div class="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
          <div class="col-2">
            <h3>21:00</h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt=""
            />
            <div class="weather-forecast-temperature">
              <strong>16°</strong> 15°
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
  
 

}