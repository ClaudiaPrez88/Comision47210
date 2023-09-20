import React from 'react';
import { useRef } from 'react';


export const DivRef = () => {
    const divRef = useRef(null)
    const HandleClick = () =>{
        divRef.current.innerHTML = 'Nuevo contenido'
    }
  return (
    <div>
        <div ref={divRef}> Contenido original</div>
        <button onClick={HandleClick}>Cambiar contenido</button>
    </div>
  )
}
