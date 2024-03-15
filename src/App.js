import React from 'react'
import './App.css'
import Pool from './Pool'
import Buttons from './Buttons'

import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  let interval, startTime

  const addWater = () => {
    startTime = new Date().getTime()
    interval = setInterval(() => {
      setCount(prevCount => prevCount + 1)
      if (new Date().getTime() - startTime >= 10000) {
        clearInterval(interval)
      }
    }, 2000)
  }

  const deleteWater = () => {
    startTime = new Date().getTime()
    interval = setInterval(() => {
      setCount(prevCount => prevCount - 1)
      if (new Date().getTime() - startTime >= 10000) {
        clearInterval(interval)
      }
    }, 2000)
  }

  return (
    <div className='App'>
      {count}
      <Pool />
      <Buttons addWater={addWater} deleteWater={deleteWater} />
    </div>
  )
}
