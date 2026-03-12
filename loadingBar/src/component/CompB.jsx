import React from 'react'
import { useEffect } from 'react'

const CompB = () => {
    useEffect(()=>{
        console.log('component b is mounted')
    })
  return (
    <div>CompB</div>
  )
}

export default CompB