import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './WeatherAPI.css';
import i200 from "./icons/200.jpg";
import i201 from "./icons/201.jpg";
import i202 from "./icons/202.jpg";
import i230 from "./icons/230.jpg";
import i231 from "./icons/231.jpg";
import i232 from "./icons/201.jpg";
import i233 from "./icons/233.jpg";
import i300 from "./icons/300.jpg";
import i301 from "./icons/301.jpg";
import i302 from "./icons/302.jpg";
import i500 from "./icons/500.jpg";
import i501 from "./icons/501.jpg";
import i502 from "./icons/502.jpg";
import i520 from "./icons/520.jpg";
import i521 from "./icons/521.jpg";
import i522 from "./icons/522.jpg";
import i600 from "./icons/600.jpg";
import i601 from "./icons/601.jpg";
import i602 from "./icons/602.jpg";
import i610 from "./icons/610.jpg";
import i611 from "./icons/611.jpg";
import i612 from "./icons/612.jpg";
import i621 from "./icons/621.jpg";
import i622 from "./icons/622.jpg";
import i623 from "./icons/623.jpg";
import i700 from "./icons/700.jpg";
import i711 from "./icons/711.jpg";
import i721 from "./icons/721.jpg";
import i731 from "./icons/731.jpg";
import i741 from "./icons/741.jpg";
import i751 from "./icons/751.jpg";
import i800 from "./icons/800.jpg";
import i801 from "./icons/801.jpg";
import i802 from "./icons/802.jpg";
import i803 from "./icons/803.jpg";
import i804 from "./icons/804.jpg";
import i900 from "./icons/900.jpg";
import idef from "./icons/idef.png";


const WeatherAPI = () => {
    const [weatherCondition, setWeatherCondition] = useState([]);
    const [cityName, setCityName] = useState("");
    const [city, setCity] = useState("");
   

    useEffect(()=>{
        axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city},IN&key=42aef38ff5c44c55a7f8dc23e44f66d0`)
        .then((climateCondition)=>{
          setWeatherCondition(climateCondition.data);
        })
        .catch(err=>console.log(err))
       },[city])

    //onChnage
    const onChangeHandler = (e)=>{
        setCityName(e.target.value);
    }

    //onSubmit
    const onSubmitHandler = (e)=>{
        e.preventDefault();

        setCity(cityName);

    }

    //Temperature
    const temp = (i)=>{
      if (weatherCondition.data) {
        return weatherCondition?.data[i]?.temp
      }else{
        return "--"
      }
    }
    const minTemp = (i)=>{
      if (weatherCondition.data) {
        return weatherCondition?.data[i]?.min_temp
      }else{
        return "--"
      }
    }
    const maxTemp = (i)=>{
      if (weatherCondition.data) {
        return weatherCondition?.data[i]?.max_temp
      }else{
        return "--"
      }
    }

    //Rain
    const rain = (i)=>{
      if (weatherCondition.data) {
        return weatherCondition?.data[i]?.pop
      }else{
        return "--"
      }
    }

    //Sun Time
    const sunrise = (i)=>{
      if (weatherCondition.data) {
        // Create a Date object from the Unix timestamp
        const date = new Date (weatherCondition?.data[i]?.sunrise_ts * 1000);

        // Hours part from the timestamp
        const hours = date.getHours ();

        // Minutes part from the timestamp
        const minutes = "0" + date.getMinutes ();

        // Seconds part from the timestamp
        const seconds = "0" + date.getSeconds ();

        // Will display time in 10:30:23 format
        const sunriseTime = hours + ':' + minutes.substr (-2) + ':' + seconds.substr (-2);

        return sunriseTime
      }else{
        return "--"
      }
    }

    const sunset = (i)=>{
      if (weatherCondition.data) {
        // Create a Date object from the Unix timestamp
        const date = new Date (weatherCondition?.data[i]?.sunset_ts * 1000);

        // Hours part from the timestamp
        const hours = date.getHours ();

        // Minutes part from the timestamp
        const minutes = "0" + date.getMinutes ();

        // Seconds part from the timestamp
        const seconds = "0" + date.getSeconds ();

        // Will display time in 10:30:23 format
        const sunsetTime = hours + ':' + minutes.substr (-2) + ':' + seconds.substr (-2);

        return sunsetTime
      }else{
        return "--"
      }
    }

    //Moon Time
    const moonrise = (i)=>{
      if (weatherCondition.data) {
        // Create a Date object from the Unix timestamp
        const date = new Date (weatherCondition?.data[i]?.moonrise_ts * 1000);

        // Hours part from the timestamp
        const hours = date.getHours ();

        // Minutes part from the timestamp
        const minutes = "0" + date.getMinutes ();

        // Seconds part from the timestamp
        const seconds = "0" + date.getSeconds ();

        // Will display time in 10:30:23 format
        const moonriseTime = hours + ':' + minutes.substr (-2) + ':' + seconds.substr (-2);

        return moonriseTime
      }else{
        return "--"
      }
    }

    const moonset = (i)=>{
      if (weatherCondition.data) {
        // Create a Date object from the Unix timestamp
        const date = new Date (weatherCondition?.data[i]?.moonset_ts * 1000);

        // Hours part from the timestamp
        const hours = date.getHours ();

        // Minutes part from the timestamp
        const minutes = "0" + date.getMinutes ();

        // Seconds part from the timestamp
        const seconds = "0" + date.getSeconds ();

        // Will display time in 10:30:23 format
        const moonsetTime = hours + ':' + minutes.substr (-2) + ':' + seconds.substr (-2);

        return moonsetTime
      }else{
        return "--"
      }
    }

    //Date
    const date = (i)=>{
      if (weatherCondition.data) {
        return weatherCondition?.data[i]?.datetime
      }else{
        return "--"
      }
    }

    //Day
    const day = (i)=>{
      if (weatherCondition.data) {
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const orgDate = weatherCondition?.data[i]?.datetime;
        const newDate = orgDate.replaceAll("-","/")
        const d = new Date(newDate);
        let day = weekday[d.getDay()];
        return day
      }else{
        return "--"
      }
    }

    //Visibility
    const visibility = (i)=>{
      if (weatherCondition.data) {
        return weatherCondition?.data[i]?.vis
      }else{
        return "--"
      }
    }

    //Weather Description
    const description = (i)=>{
      if (weatherCondition.data) {
        return weatherCondition?.data[i]?.weather?.description
      }else{
        return "--"
      }
    }

    //Weather code
    const imgCode = (i)=>{
      if (weatherCondition.data) {
        const code = weatherCondition?.data[i]?.weather?.code
        switch (code) {
          case 200:
            return i200
            break;
          
          case 201:
            return i201
            break;
          
          case 202:
              return i202
              break;

          case 230:
              return i230
              break;

          case 231:
              return i231
              break;

          case 232:
              return i232
              break;

          case 233:
              return i233
              break;

          case 300:
              return i300
              break;

          case 301:
              return i301
              break;

          case 302:
              return i302
              break;

          case 500:
              return i500
              break;

          case 501:
              return i501
              break;

          case 502:
              return i502
              break;

          case 520:
              return i520
              break;

          case 521:
              return i521
              break;

          case 522:
              return i522
              break;

          case 600:
              return i600
              break;

          case 601:
              return i601
              break;

          case 602:
              return i602
              break;
          
          case 610:
              return i610
              break;

          case 611:
              return i611
              break;

          case 612:
              return i612
              break;

          case 621:
              return i621
              break;
          
          case 622:
              return i622
              break;
          
          case 623:
              return i623
              break;

          case 700:
              return i700
              break;

          case 711:
              return i711
              break;

          case 721:
              return i721
              break;

            case 731:
              return i731
              break;

            case 741:
              return i741
              break;

            case 751:
              return i751
              break;

            case 800:
              return i800
              break;

            case 801:
                return i801
                break;

            case 802:
                return i802
                break;
            
            case 803:
                return i803
                break;

            case 804:
                return i804
                break;

            case 900:
                  return i900
                  break;

          default:
            return idef
            break;
        }
      }else{
        return idef
      }
    }

    //Background color
    const bgColor = (i)=>{
      if (weatherCondition.data) {
        const code = weatherCondition?.data[i]?.weather?.code;
        switch (code) {
          case 200:
            return "rgba(94,132,154,255)";       
            break;
          
          case 201:
            return "rgba(94,132,154,255)";       
            break;
          
          case 202:
            return "rgba(94,132,154,255)";
            break;
            
          case 230:
              return "rgba(94,132,154,255)";
              break;
              
          case 231:
              return "rgba(94,132,154,255)";
              break;
              
          case 232:
              return "rgba(94,132,154,255)";
              break;
              
          case 233:
              return "rgba(94,132,154,255)";
              break;
              
          case 300:
              return "rgba(94,132,154,255)";
              break;

          case 301:
              return "rgba(94,132,154,255)";
              break;

          case 302:
              return "rgba(94,132,154,255)";
              break;

          case 500:
              return "rgba(94,132,154,255)";
              break;

          case 501:
              return "rgba(94,132,154,255)";
              break;

          case 502:
              return "rgba(94,132,154,255)";
              break;

          case 520:
              return "rgba(62,171,228,255)";
              break;

          case 521:
              return "rgba(62,171,228,255)";
              break;

          case 522:
              return "rgba(94,132,154,255)";
              break;

          case 600:
              return "rgba(62,171,228,255)";
              break;

          case 601:
              return "rgba(94,132,154,255)";
              break;

          case 602:
              return "rgba(94,132,154,255)";
              break;
          
          case 610:
              return "rgba(94,132,154,255)";
              break;

          case 611:
              return "rgba(94,132,154,255)";
              break;

          case 612:
              return "rgba(94,132,154,255)";
              break;

          case 621:
              return "rgba(62,171,228,255)";
              break;
          
          case 622:
              return "rgba(94,132,154,255)";
              break;
          
          case 623:
              return "rgba(94,132,154,255)";
              break;

          case 700:
              return "rgba(62,171,228,255)";
              break;

          case 711:
              return "rgba(62,171,228,255)";
              break;

          case 721:
              return "rgba(62,171,228,255)";
              break;

            case 731:
              return "rgba(62,171,228,255)";
              break;

            case 741:
              return "rgba(62,171,228,255)";
              break;

            case 751:
              return "rgba(62,171,228,255)";
              break;

            case 800:
              return "rgba(62,171,228,255)";
              break;

            case 801:
                return "rgba(62,171,228,255)";
                break;

            case 802:
                return "rgba(62,171,228,255)";
                break;
            
            case 803:
                return "rgba(94,132,154,255)";
                break;

            case 804:
                return "rgba(94,132,154,255)";
                break;

            case 900:
                  return "rgba(94,132,154,255)";
                  break;

          default:
            return "rgb(37, 88, 255)"
            break;
        }
      }else{
        return "rgb(37, 88, 255)" 
      }
    }


  return (
      <div style={{background: bgColor(0)}} className='main'>
        <div className="search-box">
          <form onSubmit={onSubmitHandler}>
          <button type='submit' className="btn-search">🔎</button>
          <input
            className="input-search" 
            onChange={onChangeHandler} 
            value={cityName} 
            name='city' 
            type="text"
            placeholder='Enter Your City...' 
          />
          </form>
        </div>
        <div className="container">
          <div className="subContainer1">
            <div className='superSubContainer1-1'>
              <div>
                <p>{date(0)}, {day(0)}</p>
                <h4>Temperature:</h4>
                <h1>{temp(0)}°C</h1>
                <h4>Min-Max Temp:</h4>
                <p>{minTemp(0)}°C - {maxTemp(0)}°C</p>
                <h4>Rain:</h4>
                <p>{rain(0)}%</p>
              </div>
              <div>
                <img src={imgCode(0)} alt="" id='weatherIcon1' />
              </div>
            </div>
            <div className='superSubContainer1-2'>
              <ul>
                <li>
                  <h4>Sky:</h4>
                  <p>{description(0)}</p>
                  <h4>Visibility:</h4>
                  <p>{visibility(0)}km</p>
                </li>
                <li>
                  <h4>Sunrise:</h4>
                  <p>{sunrise(0)}am</p>
                  <h4>Sunset:</h4>
                  <p>{sunset(0)}pm</p>
                </li>
                <li>
                  <h4>Moonrise:</h4>
                  <p>{moonrise(0)}pm</p>
                  <h4>Moonset:</h4>
                  <p>{moonset(0)}am</p>
                </li>
              </ul>
            </div>
            
          </div>
          <div className="subContainer2">
            <div style={{background: bgColor(1)}} className="nextDayForecastCard">
                <img id='weatherIcon2' src={imgCode(1)} alt="" />
                <p>{day(1)}</p>
                <ul>
                  <li>
                    <h3>🌡️</h3>
                    <p>{temp(1)}°C</p> 
                  </li>
                  <li>
                    <h3>💧</h3>
                    <p>{rain(1)}%</p>
                  </li>
                </ul>
            </div>
            <div style={{background: bgColor(2)}} className="nextDayForecastCard">
                <img id='weatherIcon2' src={imgCode(2)} alt="" />
                <p>{day(2)}</p>
                <ul>
                  <li>
                    <h3>🌡️</h3>
                    <p>{temp(2)}°C</p> 
                  </li>
                  <li>
                    <h3>💧</h3>
                    <p>{rain(2)}%</p>
                  </li>
                </ul>
            </div>
            <div style={{background: bgColor(3)}} className="nextDayForecastCard">
                <img id='weatherIcon2' src={imgCode(3)} alt="" />
                <p>{day(3)}</p>
                <ul>
                  <li>
                    <h3>🌡️</h3>
                    <p>{temp(3)}°C</p> 
                  </li>
                  <li>
                    <h3>💧</h3>
                    <p>{rain(3)}%</p>
                  </li>
                </ul>
            </div>
            <div style={{background: bgColor(4)}} className="nextDayForecastCard">
                <img id='weatherIcon2' src={imgCode(4)} alt="" />
                <p>{day(4)}</p>
                <ul>
                  <li>
                    <h3>🌡️</h3>
                    <p>{temp(4)}°C</p> 
                  </li>
                  <li>
                    <h3>💧</h3>
                    <p>{rain(4)}%</p>
                  </li>
                </ul>
            </div>
            <div style={{background: bgColor(5)}} className="nextDayForecastCard">
                <img id='weatherIcon2' src={imgCode(5)} alt="" />
                <p>{day(5)}</p>
                <ul>
                  <li>
                    <h3>🌡️</h3>
                    <p>{temp(5)}°C</p> 
                  </li>
                  <li>
                    <h3>💧</h3>
                    <p>{rain(5)}%</p>
                  </li>
                </ul>
            </div>
            <div style={{background: bgColor(6)}} className="nextDayForecastCard">
                <img id='weatherIcon2' src={imgCode(6)} alt="" />
                <p>{day(6)}</p>
                <ul>
                  <li>
                    <h3>🌡️</h3>
                    <p>{temp(6)}°C</p> 
                  </li>
                  <li>
                    <h3>💧</h3>
                    <p>{rain}%</p>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default WeatherAPI
