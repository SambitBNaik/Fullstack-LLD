import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useRef} from 'react';
const people=["Sambit","rohit","ashish","lambu"];

function App() {
  const [data , setData]= useState(people);

  const loadmore=()=>{
    console.log("Loading More");
    const temp=Array.from(Array(5).keys(), (n)=>"john");
    setData([...data,...temp]);
  }
  return (
    <div className="App">
     <h1>Table</h1>
     <DataTable data={data} loadmore={loadmore}/>
    </div>
  );
}

export default App;

const DataTable=({data, loadmore})=>{
  const ref= useRef(null);
  const onScreen= useIntersectionObserver(ref,{threshold : 0.5});

  useEffect(()=>{
    if(onScreen) loadmore();
  },[onScreen]);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>{onScreen ? "on Screen" :"Scroll more"}</tr>

        {data.map((val, i) =>
          i !== data.length - 1 ? (
            <tr key={`${i}_${val}`}>
              <td>{i}</td>
              <td>{val}</td>
            </tr>
          ) : (
            <tr ref={ref} key={`${i}_${val}`}>
              <td>{i}</td>
              <td>{val}</td>
            </tr>
          )
        )}
        <tr ref={ref}>Loading...</tr>
        <tr>{onScreen ? "on Screen" : "Scroll More"}</tr>
      </tbody>
    </table>
  )

}

const useIntersectionObserver=(ref, options)=>{
 const [isIntersecting, setIntersecting]=useState(false);
 
 useEffect(()=>{
  const observer= new IntersectionObserver(([entry])=>{
    setIntersecting(entry.isIntersecting);
  },options);

  if(ref.current){
    observer.observe(ref.current);
  }
  return ()=>{
    observer.unobserve(ref.current);
  }
 },[]);

 return isIntersecting;
}
