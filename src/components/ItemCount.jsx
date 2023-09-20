
import {MDBBtn,MDBInput,MDBIcon} from "mdb-react-ui-kit";
import { useEffect,useState } from 'react';
import data from '../../products.json';

function ItemCount({fullstock}) {
    const [Aumentar,setAumentar ]= useState(0);
  const [productos,setProductos] = useState([])

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

  function disminuir() {
    if (Aumentar <= 0 ) {
        setAumentar (0);
    }   
   else
    setAumentar(Aumentar - 1);
  }

    
  return (
    <>
        {/* <div className='boton-item'>
        <Button onClick={() => setAumentar(Aumentar + 1)}>+</Button>
        <p className='numero-item'>{Aumentar}</p>
         <Button onClick={disminuir}>-</Button>
        </div> */}
        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
        <MDBBtn className="px-3 me-2">
          <MDBIcon fas icon="minus"  onClick={disminuir} />
        </MDBBtn>

        <MDBInput value={Aumentar} min={0} type="number" label="Quantity" />

        <MDBBtn  onClick={() => setAumentar(Aumentar + 1)}  className="px-3 ms-2" >
          <MDBIcon fas icon="plus"/>
        </MDBBtn>          
        </div>
       
    </>
  );
}

export default ItemCount;



