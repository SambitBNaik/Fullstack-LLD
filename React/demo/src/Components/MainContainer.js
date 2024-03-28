import React from 'react';
import MainContainerChild from './MainContainerChild';


const MainContainer = () => {
    //Jsx
    const headingName="MainContainer";
  return (
    <div style={{
        display:'flex',
        height:"200px",
        backgroundColor:"orange",
        width:"100%",
    }}
    >
        <h1>{headingName}</h1>
        {10+20}
        <MainContainerChild ChildData={"1,2,3,43445"}/>
    </div>
  )
}

export default MainContainer