// import React from 'react'
// import { useState } from 'react'
// import { useCallback } from 'react'
// import { useRef } from 'react'

// const App = () => {
//   const [cal, setcal] = useState(0)
  
//  const handleCalculation = useCallback(() => {
//   console.log("start");

//   for (let i = 10; i < 394345458; i++) {}

//   console.log("ho gya hai");
// }, [cal]);

// function handleCalculation2(){
//   console.log('run now');
  
// setcal(prev=>prev+1)
// console.log(cal);

// }

// return(
//   <button onClick={handleCalculation2}>Click me</button>
// )

// }

// export default App

// import React from 'react'
// import CompA from './component/CompA'
// import CompB from './component/CompB'

// const App = () => {

//   return (
//     <div>App


//       <CompA/>
//       <CompB/>
//     </div>
//   )
// }

// export default App


import React, { useState } from "react";

function Child() {
  console.log("Child Render");
  return <h1>Child</h1>;
}

function App() {
  const [count, setCount] = useState(0);

  console.log("App Render");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click {count}
      </button>
      <Child />
    </div>
  );
}

export default App;