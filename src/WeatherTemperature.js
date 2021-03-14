import React,{useState} from "react";



export default function WeatherTemperature(props){
    let[unit, setUnit]= useState("celsius");
    function displayFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function displayCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius"){
        return(
        <div className="WeatherTemperature">
            <span className="temperature">
            <strong className="temperature" id="temperature">
                {Math.round(props.celsius)}
              </strong>{" "}

              <small className="units">
                  °C | {" "}
                 <a href="#" id="f-link" onClick={displayFahrenheit}>
                  °F
                </a>

              </small>
        </span> 
        </div>
        );
} else {
    let fahrenheit= (props.celsius * 9/5) + 32 
    return (
    <div className="WeatherTemperature">
            <span className="temperature">
            <strong className="temperature" id="temperature">
                {" "}
                {Math.round(fahrenheit)}
              </strong>{" "}

              <small className="units">
                   <a href="#" id="f-link" onClick={displayCelsius} > °C </a>
                | °F
              </small>
        </span> 
        </div>)
    }
}