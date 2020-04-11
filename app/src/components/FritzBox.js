import React, { useState, useEffect} from 'react';
import './../css/FritzBox.css'

const FritzBox = () => {
  const[load,setloading] = useState('start loading');
  const[loadingGif, setloadingGif] = useState('finish');
  const[time, setTime] = useState(0);
  const[starttimer, setStarttimer] = useState(false);

  const extractfritzbox = async () => {
    setTime(0);
    setloading('download started');
    setloadingGif('load')
    setStarttimer(true)
    const result = await fetch(`/fritzbox`)
    const body = await result.json();
    setloadingGif('finish')
    setloading(body.status);
    setStarttimer(false)
  }

  useEffect(() => {
    if(starttimer){
      setTimeout(() => {
        setTime(time+1);
      }, 1000);
    }
  },[starttimer,time]);

  return (
    <>
      <h2>start extracting fritz box</h2>
        <div>{time}</div>
        <div className={loadingGif}></div>
        <p>{load}</p>
        <button disabled={starttimer} onClick={()=>extractfritzbox()}>start</button>
    </>
   );
}

export default FritzBox;
