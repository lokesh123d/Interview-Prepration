import React from 'react'
import { useEffect } from 'react'

const CompC = () => {
    useEffect(()=>{
     console.log('component c useeffct')   
    })
  return (
    <div>CompC</div>
  )
}

export default CompC