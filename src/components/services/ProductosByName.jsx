import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// Importo mi promesa para traer los productos
import { getProductoByName } from "./productos";


const ProductosByName = () => {
// Creo el useSate para generar mi objeto de array que contendra la info de mi Promesa
const [productos,setProductos] = useState(null);
//useParams me dara el valor que la url genera, con el parametro de "productoId", para asi luego usarlo y filtrar 
const {productoId} = useParams();

//useEffect 
   useEffect(() => {
    getProductoByName(productoId)
    .then((data) => setProductos(data))
   }, [productoId]);

  if (!productos) {
    return <h1>No existe el productos</h1>;
  }
const nombre = productos.filter(character => character.id === productoId);
const miProducto = nombre[0];


    return(
        <div>
            <div>
      <h1>Soy = {miProducto.id}</h1>
      
      
      {/* <ul>
        {pokemon.abilities.map((ability) => (
          <li key={ability.ability.id}>{ability.ability.id}</li>
        ))}
      </ul> */}
    </div>
        </div>
    );

};

export default ProductosByName