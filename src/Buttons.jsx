import React from 'react'


export default function Buttons({ addWater, deleteWater }) {
    return (
        <div className='Buttons'>
            <button onClick={addWater}>Add</button>
            <button onClick={deleteWater}>Delete</button>
        </div>
    )
}
