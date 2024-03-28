import React,{Fragment,useState} from 'react'

const Counter = () => {
    let [count, setCount] = useState(0);
    function Increment_value(){
        count+=1;
        setCount(count);
    }
    function Decrement_Value(){
        count-=1;
        setCount(count);
    }
    function Reset_value(){
      count=0;
      setCount(count);
    }
  return (
  <Fragment>
    <div>Counter</div>
    <div>The count value is {count}</div>
    <button onClick={Increment_value}>Increment Value</button>
    <button onClick={Decrement_Value}>Decrement Value</button>
    <button onClick={Reset_value}>Reset</button>
  </Fragment>
  );
}

export default Counter;