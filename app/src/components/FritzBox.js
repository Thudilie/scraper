import React, { useState, useEffect} from 'react';
import './../css/FritzBox.css'

const FritzBox = () => {
  const[load,setloading] = useState({'message':'','gif':'', 'timer': false});
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

  let text='Die durchschnittliche Dauer dieser Aktion dauert 20-30 Sekunden.'
  return (
    <div className="fritzbox">
      <div className="text">
        <h2>FritzBox</h2>
        <div className="text_sub">{load.message}</div>
      </div>
      <div className="loading">
        <div className={load.gif}></div>
        <div className='loading_timeup'>{time===0 && !load.timer ? text : time}</div>
      </div>
      <button disabled={load.timer} onClick={()=>extractfritzbox()}>start</button>
    </div>
   );
}

export default FritzBox;
