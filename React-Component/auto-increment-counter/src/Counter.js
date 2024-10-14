import React, { useEffect, useRef, useState } from 'react'

const Counter = () => {
    const [counter,setCounter]=useState(0);
    const [pause, setPause]=useState(false);
    const interval= useRef(null);

    useEffect(()=>{
        console.log("mounting");
        startTimer();
        return ()=>{
            if(interval.current) clearInterval(interval.current);
        }
    },[]);

    const startTimer=()=>{
        interval.current= setInterval(()=>{
            setCounter((counter)=> counter+1)
        },1000);

        if(pause) setPause(false);
    }

    const resetTimer=()=>{
        clearInterval(interval.current);
        setPause(true);
        setCounter(0);
    }

    const stopTimer=()=>{
        clearInterval(interval.current);
        setPause(true);
    }

  return (
    <>
     <h1>Counter</h1>
     <div>{counter}</div>
     <div>
        <button onClick={pause ? startTimer : stopTimer}>
            {pause ? "Start" : "Stop"}
        </button>
        <button onClick={()=>{resetTimer()}}>Reset</button>
     </div>
    </>
  )
}

export default Counter