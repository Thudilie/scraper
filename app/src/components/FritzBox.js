import React, {useState} from 'react';

const FritzBox = () => {
  const[load,setloading] = useState('start loading');
  const extractfritzbox = async() =>{
    setloading('finish loading')
  }
  return (
    <>
      <h2>start extracting fritz box</h2>
        <p>{load}</p>
        <button onClick={()=>extractfritzbox()}>start</button>
    </>
   );
}

export default FritzBox;
