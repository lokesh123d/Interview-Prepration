import React from 'react'
import Debounce from './Debounce'
import { useState } from 'react'
import Throttle from './Throttle'

const App = () => {
  const [text, settext] = useState('')
  return (
    <div>
      <div>
        <h2>Debounce Function</h2>
      <Debounce settext={settext}/>
<p>Searching :{text.length==0?'   .......': text}</p>
      </div>
      <hr />
      <hr />
      <div>
        <h2>Throttle Function Here</h2>
        <Throttle/>
      </div>
    </div>
  )
}

export default App