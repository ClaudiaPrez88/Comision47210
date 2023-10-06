import React, { useState } from "react";
import { createContext } from "react";



export const CartContext = createContext();

export function CartProvider({children}){
    const [isDarkMode,setDarkMode] = useState(false);
    const [cart,setCart]=useState([]);
    return <CartContext.Provider value={{isDarkMode,setDarkMode,cart,setCart}}>
        {children}
    </CartContext.Provider>
}
