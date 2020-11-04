import React,{useState,useEffect} from 'react';

const WeatherApp = () =>{

  const [currentTime,setCurrentTime] = useState(new Date());
  // const [latitude,setLatitude] = useState();
  useEffect(()=>{
    setInterval(()=>{
      setCurrentTime(new Date());
    },1000);
  })

  var getWeather = () =>{
     if(navigator.geolocation)
     {
       navigator.geolocation.getCurrentPosition(position=>{
         var latitude = position.coords.latitude;
         var longitude = position.coords.longitude;
         console.log(latitude,longitude);
       },
       error=>{
         console.log('error');
       },{timeout:10000}
     )
   }
 }

  const key = "96f70a610a2b066259b75fc8d23eab98";
  // fetch(`api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)

  return(
    <div>
      <h1>Time: {currentTime.toLocaleString()}</h1>
    </div>
  )
};

export default WeatherApp;
