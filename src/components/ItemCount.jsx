
import {MDBBtn,MDBInput,MDBIcon} from "mdb-react-ui-kit";
import { createContext, useState } from 'react';
import { Link } from "react-router-dom";


function ItemCount({stock}) {
  


  const [count, setCount] = useState(0);
  const incrementar = () => {
  setCount ((count) => count + 1 )
  };
  
const decrementar = () =>{
    setCount ((count) => count - 1)
};

const [cantidad,setCantidad] = useState(0);

const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleLogin = () => {
 if (count > 0) {
  setIsLoggedIn(true);
  setCantidad(count);
 }
};

    
  return (
    <>
    
         <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
          
            <MDBBtn disabled={count <= 0} onClick={decrementar}>
            <MDBIcon fas icon="minus"/></MDBBtn>
            <MDBInput value={count} min={0} type="number" label="Cantidad" />
            <MDBBtn  onClick={incrementar}  className="px-3 ms-2" disabled={stock == count} >
            <MDBIcon fas icon="plus"/>
            </MDBBtn>  
            
            
        </div>
        <div>
        {isLoggedIn ? (
        <div>
          <Link to='/cart'> <MDBBtn>ir al carrito</MDBBtn> </Link>   
        </div>
      ) : (
        <div>
          <MDBBtn onClick={handleLogin}>Agregar al carrito</MDBBtn>
          
        </div>
      )}
      <h1>Tienes: {cantidad}</h1>
        </div>
        
         
    </>
  );
}

export default ItemCount;



