import React,{useState,useEffect,useRef} from 'react'
import './div.css';

export const DIV = () => {
  const [timer,setTimer] =useState(0);
  const [color,setColor] =useState('');
  const divRef = useRef();
  useEffect(()=>{
    const interval=setInterval(()=>{
      setTimer(timer+1)
    },1000)
    const style = getComputedStyle(divRef.current);
    setColor(style.backgroundColor);
    return(()=>{
      clearInterval(interval);
    })
  },[timer,color])
  return (
    <div className='test' ref={divRef}>
      {timer}:{color}
      <div>

      </div>
    </div>
  )
}
