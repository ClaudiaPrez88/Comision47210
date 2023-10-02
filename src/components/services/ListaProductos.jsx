import { useEffect, useState } from "react";
import data from '../../../products.json';
import loading from '../../img/animacion/loading.json';
import { Player } from '@lottiefiles/react-lottie-player';


export const ListaProductos = () =>{

const [productos,setProductos]=useState([]);

const pedirProductos = () =>{
    return new Promise((resolve,reject) => {
     setTimeout(() => {
       resolve(data);
     }, 2000);
      
    })
   }
   if (!productos) {
    return(
      <Player
        src={loading}
        className="player"
        loop
        autoplay
        speed={1}
        />
    );
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

