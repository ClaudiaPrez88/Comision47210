const API_URL = "http://localhost:5173/products.json";
import data from "../../../products.json"
              

export const getProductoList = () => {
    return fetch(`${API_URL}`);
};



// Creo la promesa para traer mi array de productos
export const getProductoByName = () =>{
    return new Promise((resolve,reject) => {
     setTimeout(() => {
       resolve(data);
     }, 2000);
    })
   }