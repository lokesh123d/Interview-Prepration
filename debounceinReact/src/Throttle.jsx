import React from 'react'
import { useRef } from 'react';

const Throttle = () => {
const prevTime = useRef(0)
    function handleThrottle(){
    let now = Date.now();
if(now-prevTime.current>1000){
    console.log('Added'+now);
    prevTime.current=Date.now();
}
    
  }
    return (
    <div>

        <input type="text" placeholder='Add Comment...' />
        <button style={{margin:'20px'}} onClick={handleThrottle}>Add</button>
    </div>
  )
}

export default Throttle


// // what exactly throttle is 
// english conversation with students like a alsamath – 1 hour
// aI conversation – 30 minutes
// real call conversation in apps  – 30 minutes
// english prodcast or listening songs  – 1 hour
// technical explanation by yourself – 1 hour