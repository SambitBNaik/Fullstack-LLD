import React, { useState } from 'react'


const Tabs = ({tabsData, currentIndex=0}) => {
    const [tabs]=useState(tabsData);
    const [currentTab,setCurrentTab]=useState(currentIndex);

    const generateTabHeading=()=>{
        return(
            <div className="tabs-heading">
                {tabs.length>0 && tabs.map((tab,index)=>{
                    return(
                        <button onClick={()=>setCurrentTab(index)}>
                            {tab.label}
                        </button>
                    )
                })}
            </div>
        )
    }
    const generateTabContent=()=>{
        return(
            <div className="tab-content">
                {tabs.length>0 && tabs.map((tab,index)=>{
                    return(
                        <p className={`${index===currentTab ? "active" : "inactive"}`}>
                            {tab.content}
                        </p>
                    )
                })}
            </div>
        )
    }
  return (
    <>
      {generateTabHeading()}
      {generateTabContent()}
    </>
  )
}

export default Tabs