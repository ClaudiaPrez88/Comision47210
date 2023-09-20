import { useEffect,useState } from 'react';
import data from '../../products.json';
import { Item } from './Item';
import { Button, Container,Row, Col} from 'react-bootstrap';
import {MDBIcon,MDBInput,MDBBtn} from "mdb-react-ui-kit";
  
  
  export const ItemList = () => {
  
    const [productos,setProductos] = useState([]);


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
            <Col lg={3}>
             <Item  name={producto.name} price={producto.price} image={producto.image} id={producto.id} stock={producto.stock}/>
           
            </Col>
            </>
            )
            )}
            </Row>
        </Container>

      </div>
    )
  }
  