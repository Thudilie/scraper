import React, { useState, useEffect} from 'react';
import './../css/FritzBox.css'

const FritzBox = () => {
  const[load,setloading] = useState({'message':'start loading','gif':'finish', 'timer': false});
  const[time, setTime] = useState(0);

  const extractfritzbox = async () => {
    setTime(0);
    setloading({'message':'download started','gif':'load', 'timer': true});
    const result = await fetch(`/fritzbox`)
    const body = await result.json();
    setloading({'message': body.status,'gif':'finish','timer':false});
  }

  useEffect(() => {
    if(load.timer){
      setTimeout(() => {
        setTime(time+1);
      }, 1000);
    }
  },[load.timer,time]);

  return (
    <>
      <h2>start extracting fritz box</h2>
        <div>{time}</div>
        <div className={load.gif}></div>
        <p>{load.message}</p>
        <button disabled={load.timer} onClick={()=>extractfritzbox()}>start</button>
    </>
   );
}

export default FritzBox;
