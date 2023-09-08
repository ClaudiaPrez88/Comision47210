import React from 'react';
import Cart from '../img/svg/cart.svg';







export const CarWidget = () => {
  return (
    <div className='car-widget'>
        <div class="grid-item"><img src={Cart} alt='carrito' className='svg'/></div>
        <div class="grid-item"><p>3</p></div>
    </div>
  )
}
