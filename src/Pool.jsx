import React from 'react'
import Water from './Water'
import { useEffect, useState } from 'react'
import "./Pool.css"

export default function Pool({ count }) {

    const [arr, setArr] = useState([]);

    useEffect(() => {
        let a = [];
        for (let i = 1; i <= count; i++) {
            a.push(i);
        }
        setArr(a);

    }, [count]);


    return <div className="Pool">
        {
            arr.map(el => <Water key={el} />)
        }
    </div>
}