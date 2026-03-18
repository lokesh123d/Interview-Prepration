import React, { createContext, useState } from "react";
import Home from "../component/Home";
import About from "../component/About";
import Two from "../component/Two";

export const TabContext = createContext();

const TabProvider = ({ children }) => {
  const [tabData, setTabData] = useState([
    {
      tabHeading: "Home",
      content: <Home />,
      isActive: true,
      id: Date.now() + Math.random() * 3453,
    },
    {
      tabHeading: "About",
      content: <About />,
      isActive: false,
      id: Date.now() + Math.random() * 3453,
    },
    {
      tabHeading: "Two",
      content: <Two />,
      isActive: false,
      id: Date.now() + Math.random() * 3453,
    }
  ]);

const [currentTab, setCurrentTab] = useState('Home')


  return (
    <TabContext.Provider value={{ tabData, setTabData ,currentTab,setCurrentTab}}>
      {children}
    </TabContext.Provider>
  );
};

export default TabProvider;
