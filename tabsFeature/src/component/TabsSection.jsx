import React, { useContext } from "react";
import { TabContext } from "../context/TabContext";
import Tabs from "./Tabs";

const TabsSection = () => {
  const { tabData ,setTabData ,currentTab,setCurrentTab} = useContext(TabContext);
  return (
    <div className="relative w-full">
      <div className="bg-slate-700 w-full text-white flex py-4 justify-end gap-10 font-bold items-center px-6 fixed ">
      {tabData.map((val) => {
        return (
          <button
          className=""
            key={val.id}
            onClick={() => {
              setCurrentTab(val.tabHeading)
            }}
          >
            {val.tabHeading}
          </button>
        );
      })}
    </div>
    <div className="h-screen p-20 flex justify-center items-center text-3xl">
      {tabData.map((val)=>{
        if(val.tabHeading == currentTab){
          return  (<div key={val.id}>{val.content}</div>)
        }
      })}
    </div>
    
    </div>
  );
};

export default TabsSection;
