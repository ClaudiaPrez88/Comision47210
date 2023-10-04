import { useState,useEffect } from "react";
import { getProductoByName } from "../services/productos";


export const useProductById = (productoId) =>{
    
    const [productos,setProductos] = useState(null);
    useEffect(() => {
        getProductoByName(productoId)
        .then((res)=>{
           setProductos(res);
        });
       }, [productoId]);

       return{
        productos
       }
}