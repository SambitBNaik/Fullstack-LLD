import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';

const trafficLights=[
  {
    color:"red",
    bgColorClass:"background-red",
    next:"green",
    wait:4000,
  },
  {
    color:"yellow",
    bgColorClass:"background-yellow",
    next:"red",
    wait:500,
  },
  {
    color:"green",
    bgColorClass:"background-green",
    next:"yellow",
    wait:3000,
  }
]

function App() {
  const [activeLights, setActiveLights]=useState("green");
  const light= trafficLights.find((light)=>light.color===activeLights);

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setActiveLights(light.next);
    },[light.wait])

    return ()=>clearTimeout(timer);
  },[activeLights,light])
  return (
    <div className="App">
      <h1>Traffic Lights</h1>
      <div className='traffic-container'>
        {
          trafficLights.map((light)=>(
            <div
              key={light.color}
              className={
                `traficLight ${activeLights===light.color ? light.bgColorClass : `background-grey`}`
              }
            >
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
