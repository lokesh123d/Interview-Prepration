// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useRef } from "react"

function App(){
 const ref = useRef(0)

 function handle(){
   ref.current++
   console.log(ref.current)
 }

 return <button onClick={handle}>Click{ref.current}</button>
}
export default App
