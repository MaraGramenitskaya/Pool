import React from 'react'
import './App.css'
import Pool from './Pool'
import Buttons from './Buttons'
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);

  const addWater = () => {
    const start_time = Date.now();
    let interval = setInterval(() => {
      setCount(prev => prev + 1);
      if (Date.now() - start_time > 10000) clearInterval(interval);
    }, 2000);
  }

  const removeWater = () => {
    const start_time = Date.now();
    let interval = setInterval(() => {
      setCount(prev => prev - 1);
      if (Date.now() - start_time > 10000) clearInterval(interval);

    }, 2000);
  }

  return <div className="App">
    <div> {count} </div>
    <Buttons addWater={addWater} deleteWater={removeWater} />
    <Pool count={count} />
  </div>
}