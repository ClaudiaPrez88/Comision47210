
import { useEffect,useState } from 'react';
import { getProductoByName } from "./productos";
import { Container,Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Item } from '../Item';
import loading from '../../img/animacion/loading.json';
import { Player } from '@lottiefiles/react-lottie-player';

export const ProductoByCategory = () => {
  // Creo el useSate para generar mi objeto de array que contendra la info de mi Promesa
const [productos,setProductos] = useState(null);
//useParams me dara el valor que la url genera, con el parametro de "productoCategory", para asi luego usarlo y filtrar 
const {productoCategory} = useParams();



     //useEffect 
   useEffect(() => {
    getProductoByName(productoCategory)
    .then((data) => setProductos(data))
   }, [productoCategory]);

  if (!productos) {
    return(
      <>
      <Player
        src={loading}
        className="player"
        loop
        autoplay
        speed={1}
        />
      </>
    )
  }
  const categoria = productos.filter(producto => producto.category === productoCategory);
  console.log(categoria)
  return (
    
      <>
     
         <div className='item-list-container'>
         <Container>
            <Row>
            {categoria.map((producto) =>(   
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
      
     
      </>
  )
}
