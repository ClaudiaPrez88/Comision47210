import { useEffect,useState } from 'react';
import { Item } from './Item';
import {  Container,Row, Col} from 'react-bootstrap';
import { getProductoByName } from './services/productos';
import Loader from './Loader';
import Button from '@mui/material/Button';


  
  
  export const ItemList = () => {
    const [productos,setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [visible, setVisible] = useState(4);

    useEffect(() => {
     getProductoByName()
     .then((res)=>{
        setProductos(res);
        setIsLoading(false);
     });
    }, []);

    const verMasProductos = (e) => {
      if(visible >= productos.length){
        e.preventDefault();
      }
      else( setVisible((prev) => prev + 4)
      )
    };

   

      return (
        <div className='item-listcontainer'>
          <Container>
              <Row>
                {isLoading ?   <><Loader/></> :
                <>
                  {productos.slice(0,visible).map((producto) =>(   
                  <Col lg={3} sm={6} xs={12} >
                  <Item  name={producto.name} price={producto.price} image={producto.image} id={producto.id} stock={producto.stock} category={producto.category}/>
                  </Col>
                  )
                  )}
                  {visible >= productos.length ? <p>No hay más produtos</p> :
                  <Button variant="contained" onClick={verMasProductos}>Ver mas productos</Button>
                  }
                 
                  
                </> 
                }
               
              
              </Row>
          </Container>
  
        </div>
      )
  }
  