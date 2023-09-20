
import {MDBBtn,MDBInput,MDBIcon} from "mdb-react-ui-kit";
import { useEffect,useState } from 'react';
import data from '../../products.json';

function ItemCount({stock}) {
  const [productos,setProductos] = useState([])
  const [count, setCount] = useState(0);

  const pedirProductos = () =>{
   return new Promise((resolve,reject) => {
       resolve(data)
   })
  }
  useEffect(() => {
   pedirProductos()
   .then((res)=>{
      setProductos(res);
   });
   
  }, []);

  const incrementar = () => {
    setCount ((count) => count + 1 )
  }
  
const decrementar = () =>{
    setCount ((count) => count - 1)
}
 

    
  return (
    <>
        {/* <div className='boton-item'>
        <Button onClick={() => setAumentar(Aumentar + 1)}>+</Button>
        <p className='numero-item'>{Aumentar}</p>
         <Button onClick={disminuir}>-</Button>
        </div> */}
        {/* <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
            <MDBBtn>
            <MDBIcon fas icon="minus" disabled={count <= 0 }  onClick={decrementar} /></MDBBtn>
            <MDBInput value={count} min={0} type="number" label="Quantity" />
            <MDBBtn  onClick={incrementar}  className="px-3 ms-2" disabled={stock === count} >
            <MDBIcon fas icon="plus"/>
            </MDBBtn>          
        </div> */}
       
    </>
  );
}

export default ItemCount;



