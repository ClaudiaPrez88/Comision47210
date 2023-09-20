import { useEffect,useState } from 'react';
import data from '../../products.json';
import { Item } from './Item';
import { Button, Container,Row } from 'react-bootstrap';
import {MDBIcon,MDBInput,MDBBtn} from "mdb-react-ui-kit";
  
  
  export const ItemList = () => {
  
    const [count, setCount] = useState(0);
    const [productos,setProductos] = useState([]);

 
  
const incrementar = () => {
    setCount ((count) => count + 1 )
  }
  
const decrementar = () =>{
    setCount ((count) => count - 1)
}
 
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
   



    
    return (
      <div>
        <Container>
            <Row>
            {productos.map((producto) =>(
            <>
             <Item  name={producto.name} price={producto.price} image={producto.image} id={producto.id} stock={producto.stock}/>
             <Button  className="px-3 me-2" disabled={count <= 0 }  onClick={decrementar} > - </Button>
            {/* <MDBBtn>
            <MDBIcon fas icon="minus" /></MDBBtn> */}
            <MDBInput value={count} min={0} type="number" label="Quantity" />
            <MDBBtn  onClick={incrementar}  className="px-3 ms-2" disabled={producto.stock === count} >
            <MDBIcon fas icon="plus"/>
            </MDBBtn> 
            </>
            )
            )}
            </Row>
        </Container>

      </div>
    )
  }
  