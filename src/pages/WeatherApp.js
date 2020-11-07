import React,{useState,useEffect} from 'react';
import axios from 'axios';


export const WeatherApp = () => {
  const [input,setInput] =useState('');
  const [currentTime,setCurrentTime] = useState(new Date());
  const [weather,setWeather] =useState({
    apiKey:"2b5c476d4a0820aa497a3af35a76347c",
    coords:null,
    description:'',
    temperature:{
      unit:'',
      value:0
    },
    city:'',
    country:'',
    icon:'',
    wind:'',
    unitIcon:'°C',
    temp_max:0,
    temp_min:0,
    sunrise:0,
    sunset:0,
    humidity:0
  });

  const KELVIN = 273;
  const weekDay = new Array(7);
  weekDay[0] = 'Sunday';
  weekDay[1] = 'Monday';
  weekDay[2] = 'Tuesday';
  weekDay[3] = 'Wednesday';
  weekDay[4] = 'Thursday';
  weekDay[5] = 'Friday';
  weekDay[6] = 'Saturday';

  const getWeatherByCoords = ()=>{
    let api=`//api.openweathermap.org/data/2.5/weather?lat=${weather.coords.latitude}&lon=${weather.coords.longitude}&appid=${weather.apiKey}`;
    axios.get(api).then(res=>{
            const data = res.data;
            return data;
          })
          .then(data=>{
            setWeather({...weather,
              country:data.sys.country,
              city:data.name,
              temperature:{value:Math.round((data.main.temp-KELVIN)*100)/100,unit:'celsius'},
              description:data.weather[0].description,
              icon:data.weather[0].icon,
              temp_max:Math.round((data.main.temp_max-KELVIN)*100)/100,
              temp_min:Math.round((data.main.temp_min-KELVIN)*100)/100,
              wind:data.wind.speed,
              sunrise:data.sys.sunrise,
              sunset:data.sys.sunset,
              humidity:data.main.humidity
            });
            console.log(data);
          }).catch(error=>{
            alert(error);
            return;
          });
  }


  const getWeatherByCity = ()=>{
    let api =`//api.openweathermap.org/data/2.5/weather?q=${input}&appid=${weather.apiKey}`;
    axios.get(api)
      .then(res=>{
        let data = res.data;
        return data;
      })
      .then(data=>{
        setWeather({...weather,
          country:data.sys.country,
          city:data.name,
          temperature:{value:Math.round((data.main.temp-KELVIN)*100)/100,unit:'celsius'},
          description:data.weather[0].description,
          icon:data.weather[0].icon,
          temp_max:Math.round((data.main.temp_max-KELVIN)*100)/100,
          temp_min:Math.round((data.main.temp_min-KELVIN)*100)/100,
          wind:data.wind.speed,
          sunrise:data.sys.sunrise,
          sunset:data.sys.sunset,
          humidity:data.main.humidity
        });
      }).catch(error=>{
        alert(` Can't find the city you are searching!   `+ error);
        return;
      })
  }

  const inputHandler = ()=>{
    if(!input){
      alert('Please enter a city');
    }
    else{
      getWeatherByCity();
    }
  }
  const celsiusToFahrenheit = ()=>{
      if(weather.temperature.unit ==='celsius'){
        setWeather({...weather,temperature:{
          value:Math.round(weather.temperature.value*9/5 +32),
          unit:'fahrenheit'}
        });
      }}
    const fahrenheitToCelsius =() =>{
      if(weather.temperature.unit ==='fahrenheit'){
        setWeather({...weather,temperature:{
          value:Math.round((weather.temperature.value-32)*5/9),
          unit:'celsius'}
        });
    }
  }
  const geolocFail = () =>{
    alert('Sorry, failed to load geolocation service');
  }

  const time = date=>`${date.getHours()}:${date.getMinutes()}`;
  useEffect(()=>{
    if(navigator.geolocation){
      var location_timeout = setTimeout(geolocFail,10000);
      navigator.geolocation.getCurrentPosition(position=>{
          clearTimeout(location_timeout);
          setWeather({...weather,coords:{
            latitude:position.coords.latitude,
            longitude:position.coords.longitude}});
      });
  }},[]);

  const timeInterval = setInterval(()=>{
    setCurrentTime(new Date());
  },1000);
  useEffect(()=>{
    return ()=>{
      clearInterval(timeInterval);
    }
  },[]);

  useEffect(()=>{
    if(weather.coords){
      getWeatherByCoords();
    }

  },[weather.coords]);

  return (
    <div id='weather'>
      <h3>{weekDay[currentTime.getDay()]}, {currentTime.toLocaleString()}</h3>
      <input type='text' placeholder='Please insert city name' onChange={e=>setInput(e.target.value)} ></input>
      <button  onClick={inputHandler}>Get Forecast</button>
      <img alt='This is an img of weather'src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}></img>
      <h3>{weather.city},{weather.country}</h3>
      <h3>Temp: {weather.temperature.value} {weather.unitIcon}</h3>
      <h3>Min: {weather.temp_min}{weather.unitIcon} / Max: {weather.temp_max}{weather.unitIcon}</h3>
      <h3>Humidity: {weather.humidity}%</h3>
      <h3>Wind: {weather.wind} km/h</h3>
      <h3>Sunrise:{time(new Date(weather.sunrise*1000))} am / Sunset:{time(new Date(weather.sunset*1000))} pm</h3>
      {// <h2>{JSON.stringify(weather)}</h2>
  }

    </div>
  )
}
