import { useEffect,useState } from 'react';
import data from '../../products.json';
import { Item } from './Item';
import {  Container,Row, Col} from 'react-bootstrap';
import { getProductoByName } from './services/productos';
import loading from '../../src/img/animacion/loading.json';
import { Player } from '@lottiefiles/react-lottie-player';
  
  
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
  