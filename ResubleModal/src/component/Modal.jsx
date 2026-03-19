import React from 'react'
import '../index.css'

function Modal({isVisible,data ,setisVisible}) {

function handleClose(e){
  if(e.target.id=='outer'){
    setisVisible(false)
  }
}

  return (
    <div id='outer'  onClick={(e)=>handleClose(e)} className={`bg-black  h-screen w-full absolute top-0 justify-center items-center ${isVisible?'flex':'hidden'} `}>
        <div className='flex p-5 min-h-50 rounded-md font-bold justify-around items-center flex-col bg-white  w-100 gap-6 text-center' id='form'>
            <h1>{data.title}</h1>
            <p>{data.paragraph}</p>
            <div className='flex gap-8'>
                <button className='bg-gray-600 text-white px-5 rounded-md active:scale-95 hover:bg-gray-500 py-2' onClick={()=>setisVisible(false)}>Cancle</button>
                <button className='bg-blue-500 text-white px-5 rounded-md active:scale-95 hover:bg-blue-400 py-2' onClick={()=>{ 
                  setisVisible(false)
                  alert('Data Got Successfully')

                }}>Done</button>
            </div>
    </div>
    </div>
  )
}

export default Modal





// we can take a is visible waht is heading and what is patagraphs that is and form that how we show the modal using the dispaly none we cna showing this thing as well and i don't as well and i just want to solve the problem as wel and i don't follow these thign for me 