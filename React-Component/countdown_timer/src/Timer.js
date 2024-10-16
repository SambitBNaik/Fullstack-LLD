import React ,{useState,useRef, useEffect} from 'react'

const Timer = ({expiresIn, onComplete}) => {
    const [time, setTime]= useState(Math.floor(expiresIn/1000));
    const [pause, setPause]=useState(false);

    let timeRef= useRef(null);

    useEffect(()=>{
        timeRef.current= setTimeout(()=>{
            setTime((prevTime)=> prevTime-1000);
        },1000);

        if(time<= 0){
            clearTimeout(timeRef.current);
            onComplete();
            setPause(true);
        }

        return ()=> clearTimeout(timeRef.current);
    },[time, onComplete]);

    const stopTimer=()=>{
        clearTimeout(timeRef.current);
        setPause(true);
    }

    const startTimer=()=>{
        if(time>0){
            setTime((time)=> time-1000);
            setPause(false);
        }
    };

    const getFormattedText=(time)=>{
        const SECONDS=1000;
        const MINUTES= 60* SECONDS;
        const HOURS=60 * MINUTES;
        const DAYS= 24* HOURS;

        const days= Math.floor(time/DAYS);
        const hours=Math.floor((time%DAYS)/ HOURS);
        const minutes=Math.floor((time% HOURS)/MINUTES);
        const seconds=Math.floor((time%MINUTES)/SECONDS);

        return(
            <div className='countdown-timer'>
                {days < 10 ? `0${days}` : days} :{hours <10 ? `0${hours}` : hours} : {" "}
                {minutes< 10 ? `0${minutes}`: minutes} : {" "}
                {seconds < 10 ? `0${seconds}`: seconds}
            </div>
        )
    }
  return (
    <>
     {getFormattedText(time)}
     <div>
        <button onClick={pause ? startTimer : stopTimer}>
            {!pause ? "Stop" :"Start"} Timer
        </button>
     </div>
    </>
  )
}

export default Timer
