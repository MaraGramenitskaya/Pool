import React from 'react'
import './Buttons.css'

export default function Buttons({ addWater, deleteWater }) {
    return (
        <div className='Buttons'>
            <button onClick={addWater} className='add'>Add</button>
            <button onClick={deleteWater} className='minus'>Delete</button>
        </div>
    )
}
