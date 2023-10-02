import { useEffect,useState } from 'react';
import data from '../../products.json';
import { Item } from './Item';
import { Button, Container,Row, Col} from 'react-bootstrap';
import {MDBIcon,MDBInput,MDBBtn} from "mdb-react-ui-kit";
import { getProductoByName } from './services/productos';
  
  
  export const ItemList = () => {
  
    const [productos,setProductos] = useState([]);


    useEffect(() => {
     getProductoByName()
     .then((res)=>{
        setProductos(res);
     });
    }, []);
  
    return (
      <div className='item-listcontainer'>
        <Container>
            <Row>
            {productos.map((producto) =>(   
            <>
            <Col lg={3} sm={6} xs={12} >
             <Item  name={producto.name} price={producto.price} image={producto.image} id={producto.id} stock={producto.stock} category={producto.category}/>
            </Col>
            </>
            )
            )}
            </Row>
        </Container>

      </div>
    )
  }
  