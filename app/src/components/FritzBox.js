import React, { useState } from 'react';

const FritzBox = () => {
  const[load,setloading] = useState('start loading');
  const[loadingGif,setloadingGif] = useState('');

  const extractfritzbox = async () => {
    setloading('download started');
    setloadingGif('load')
    const result = await fetch(`/fritzbox`)
    const body = await result.json();
    setloadingGif('finish')
    setloading(body.status);
  }
  return (
    <>
      <h2>start extracting fritz box</h2>
        <p className={loadingGif}>{load}</p>
        <button onClick={()=>extractfritzbox()}>start</button>
    </>
   );
}

export default FritzBox;
