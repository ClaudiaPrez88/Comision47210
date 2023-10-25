import { useEffect,useState } from 'react';
import { Item } from './Item';
import {  Container,Row, Col} from 'react-bootstrap';
import { getProductoByName } from './services/productos';
import Loader from './Loader';
import Button from '@mui/material/Button';
import {getFirestore,getDocs,collection} from 'firebase/firestore'


  
  
  export const ItemList = () => {
    const [productos,setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [visible, setVisible] = useState(8);

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

 const [items, setItems] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db,'items');
   getDocs(itemsCollection).then((snapshot) => {
      if(!snapshot.empty){
        setItems(snapshot.docs.map(doc=>{
          return{
            id: doc.id,
            ...doc.data()
          }
        }))
      }
    });
  },[])
  
      return (
        <div className='item-listcontainer'>
          <Container>
              <Row>
                {isLoading ?   <><Loader/></> :
                <>
                  {items.slice(0,visible).map((producto) =>(   
                  <Col lg={3} sm={6} xs={12} >
                  <Item  name={producto.name} price={producto.price} image={producto.image} id={producto.id} stock={producto.stock} category={producto.category}/>
                  </Col>
                  )
                  )}
                  {visible >= items.length ? <p className='subt-cart'>No hay más produtos</p> : 
                  <Container>
                      <Row>
                        <Col>
                          <Button variant="contained" className='boton-rojo' onClick={verMasProductos}>Ver mas productos</Button>
                        </Col>
                      </Row>
                  </Container>
                  
                  }
                 
                  
                </> 
                }
               
              
              </Row>
          </Container>
  
        </div>
      )
  }
  