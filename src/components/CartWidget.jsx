import React, { useContext } from 'react';
import Cart from '../img/svg/cart.svg';
import { CartContext } from './context/cartContext';



export const CartWidget = () => {
  const CartItemContext = useContext(CartContext);
 const cantidadCarro = CartItemContext.cart.length;

 
  return (
    <div className='car-widget'>
        <div className=" content-car "><img src={Cart} alt='carrito' className='svg'/></div>
        <div className="contenedor-numeros">
          <div className='number-car'><p className='numero'>{cantidadCarro}</p></div>
        </div>
    </div>
  )
}
