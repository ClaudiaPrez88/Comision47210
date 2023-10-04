
import {MDBBtn,MDBInput,MDBIcon} from "mdb-react-ui-kit";
import { useState } from 'react';

function ItemCount({stock}) {
  const [count, setCount] = useState(0);
  const incrementar = () => {
  setCount ((count) => count + 1 )
  };
  
const decrementar = () =>{
    setCount ((count) => count - 1)
};
 

    
  return (
    <>
    
         <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
          
            <MDBBtn disabled={count <= 0} onClick={decrementar}>
            <MDBIcon fas icon="minus"/></MDBBtn>
            <MDBInput value={count} min={0} type="number" label="Quantity" />
            <MDBBtn  onClick={incrementar}  className="px-3 ms-2" disabled={stock == count} >
            <MDBIcon fas icon="plus"/>
            </MDBBtn>          
        </div> 
       
    </>
  );
}

export default ItemCount;



