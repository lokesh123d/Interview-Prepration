import React, { useState } from 'react'
import Modal from './component/Modal'

const App = () => {

const [isVisible, setisVisible] = useState(false);
const [title, settitle] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nostrum.');
const [paragraph, setparagraph] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facilis aut nisi accusantium? Necessitatibus aperiam earum debitis praesentium voluptatum quae! Nostrum culpa veritatis unde dignissimos nisi fugiat adipisci optio ipsam.')

  return (
    <div>
<button className='bg-blue-500 text-white px-5 rounded-md active:scale-95 hover:bg-blue-400 py-2' onClick={()=>setisVisible(true)}>Open Modal</button>


<Modal isVisible={isVisible} setisVisible={setisVisible} data={{title,paragraph}}/>

    </div>
  )
}

export default App