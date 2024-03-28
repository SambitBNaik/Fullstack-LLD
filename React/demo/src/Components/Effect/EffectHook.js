import React,{Fragment, useEffect, useState} from 'react'

const EffectHook = () => {
    const [name,setName]=useState(""); 
    const [url,setUrl] = useState("");
    const [count,setCount]= useState(1);

    // Component is mounted
    // i will re-render or execute each time component render
    // also i will execute at last
    console.log("before useeffect");
    useEffect(()=>{
        console.log(url);
        console.log(count);
        const p =Promise.resolve("sambit");
       p.then((res)=>{
        setName(res);
       });
    },[]);
    console.log("after useeffect");
  return <Fragment>
     <div>EffectHook</div>
     <div>
          <label for="name">Name</label>
          <input id="name" type="text" value={name} 
          onChange={(e)=>
            {setName(e.target.value);
                setCount((prevVal) => {
                    return prevVal+1;
                })
            }}
            />
     </div>
     <div>
          <label for="url">URL</label>
          <input id="url" type="text" value={url} 
          onChange={(e)=> 
            {setUrl(e.target.value);
                setCount((prevVal) => {
                    return prevVal+1;
                })
            }}
            />
     </div>
  </Fragment>
  
}

export default EffectHook