import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'


export const TheameContext = createContext();

const TheameContextProvider = ({children}) => {
const [isDark, setisDark] = useState(false);


<TheameContext.Provider value={{isDark,setisDark}}>
{children}
</TheameContext.Provider>




}

export default TheameContextProvider