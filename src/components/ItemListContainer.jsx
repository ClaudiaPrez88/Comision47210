import React from 'react'

const Mensaje = ({texto, clase}) =>{
    return <h1 className={clase}>{texto}</h1>
}
export const ItemListContainer = () => {
  return (
    <div className='item-list'>
        <Mensaje texto="Soy el props del item list container" clase='mensaje-item' />
        <Mensaje texto="Soy el segundo mensaje del props" clase='mensaje-item' />
    </div>
  )
}
