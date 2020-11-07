import React,{useState,useReducer,useRef,useEffect} from 'react';
import '../css/clock.css';


export const Clock = () => {
  const [date,setDate] =useState(new Date());

  const hourRef = useRef();
  const minRef = useRef();
  const secRef = useRef();

  useEffect(()=>{

    const interval = setInterval(()=>{
      setDate(new Date());
    },1000);

    hourRef.current.style.transform = `rotateZ(${date.getHours()%12*30 + date.getMinutes()/2}deg)`;
    minRef.current.style.transform = `rotateZ(${date.getMinutes()*6+date.getSeconds()/10}deg)`;
    secRef.current.style.transform = `rotateZ(${date.getSeconds()*6}deg)`;

    return (()=>{
      clearInterval(interval);
    })

  },[date])


  return (
    <div className='clock'>
      <div className='hour' >
          <div className='hr' id='hr' ref={hourRef}></div>
      </div>
      <div className='min'>
          <div className='mn' id='mn' ref={minRef}></div>
      </div>
      <div className='sec'>
          <div className='sc' id='sc' ref = {secRef}></div>
      </div>
    </div>
  )
}
