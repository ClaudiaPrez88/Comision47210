import React from 'react';
import { useEffect, useState } from 'react';

// useEffect va a ser el hook que nos permita controlar efectos secundarios provocados por cambios de estados.

export default function UseEffect() {
    const [count, setCount] = useState(0)
    useEffect( ()=> {
        console.log('render')
    },[count]);

    const increment = () =>{
        setCount(count + 1);
    };
  return (
    <div>
        <button onClick={increment}>{count}</button>
    </div>
  )
}
