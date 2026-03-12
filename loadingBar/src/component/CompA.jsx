import React from 'react'
import { useEffect } from 'react'
import CompC from './CompC'

const CompA = () => {
    useEffect(()=>{
        console.log('component a is mounted')
    })
  return (
    <div>CompA
        <CompC/>
    </div>
  )
}

export default CompA