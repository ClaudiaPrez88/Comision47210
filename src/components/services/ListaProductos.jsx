import { useEffect, useState } from "react";
import data from '../../../products.json';

export const ListaProductos = () =>{

const [productos,setProductos]=useState([]);

const pedirProductos = () =>{
    return new Promise((resolve,reject) => {
     setTimeout(() => {
       resolve(data);
     }, 2000);
      
    })
   }

   useEffect(() => {
    pedirProductos()
    .then((res)=>{
       setProductos(res);
    });
   }, []);

console.log(productos)


   return (
     <>
    <div>
     <h1>Listado de pokemons</h1>
      
          
            <ul>
            {productos.map((producto)=>(
            <li key={producto.name}>
                <a href={`/producto/${producto.id}`}>{producto.name}</a>
            </li>
        ))}
        </ul>
          
          
        
    </div>
    </>
   )
   
};

