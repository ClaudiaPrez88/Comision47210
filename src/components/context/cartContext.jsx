import React, { useState } from "react";
import { createContext } from "react";



export const CartContext = createContext();

export function CartProvider({children}){
   
    const [cart,setCart]=useState([]);

    const agregarProducto = (producto, cantidad) => {
        if (isOncarrito(producto.id)) {
            sumarCantidad(producto, cantidad);
        } else {
            setCart([...cart, { ...producto, cantidad}]);
        }
    };

    const isOncarrito = (productoId) => cart.some((producto) => producto.id === productoId);
    const deleteItem = (productoId) => {setCart(cart.filter((producto) => producto.id !== productoId))}
      
    const deleteAll = (_) => setCart([]);
    const precioTotal = () => {
        return cart.reduce(
            (acum, actual) => acum + actual.price * actual.cantidad,
            0
        );
    };

    const cantidadTotal = () => {
        return cart.reduce(
            (prev, curr) => prev + curr.cantidad, 
            0
        );
    }
   
    
    return <CartContext.Provider value={{cart,setCart,agregarProducto,isOncarrito,deleteAll,cantidadTotal,precioTotal,deleteItem}}>
        {children}
    </CartContext.Provider>
}
