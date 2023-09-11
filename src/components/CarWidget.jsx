import React from 'react';
import Cart from '../img/svg/cart.svg';



export const CarWidget = () => {
  return (
    <div className='car-widget'>
        <div class=" content-car "><img src={Cart} alt='carrito' className='svg'/></div>
        <div class="contenedor-numeros">
          <div className='number-car'><p className='numero'>13</p></div>
        </div>
    </div>
  )
}
