import React from 'react'
import Water from './Water'
import { useEffect, useState } from 'react'

export default function Pool({ count }) {
    const [arr, setArr] = useState([])
    useEffect(() => {
        const newArr = []
        for (let i = 0; i < count; i++) {
            newArr.push(<Water key={i} />)
        }
        setArr(newArr)
    }, [count])
    
    return (
        <div className='Pool'>

            <Water />
        </div>
    )
}
