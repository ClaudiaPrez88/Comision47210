
import { useEffect,useState } from 'react';
// import { getProductoByName } from "./productos";
import { Container,Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Item } from '../Item';
import Loader from '../Loader';
import { Player } from '@lottiefiles/react-lottie-player';
import {getFirestore,getDocs,collection,query,where} from 'firebase/firestore';


export const ProductoByCategory = () => {
const {productoCategory} = useParams();
const [items, setItems] = useState([]);
const [isLoading, setIsLoading] = useState(true);



useEffect(()=>{
  const db = getFirestore();
  const q = query(collection(db,"items"),where("category","==",productoCategory));

  getDocs(q).then((snapshot)=>{
      if(!snapshot.empty){
        setItems(
          snapshot.docs.map((doc)=>{
          return{id:doc.id,...doc.data(),};
        }))
        setIsLoading(false)
      };
  })
})


     //useEffect 
  //  useEffect(() => {
  //   getProductoByName(productoCategory)
  //   .then((data) => setProductos(data))
  //  }, [productoCategory]);


  // const categoria = items.filter(producto => producto.category === productoCategory);

  return (
    
      <>
     
         <div className='item-list-container'>
         <Container>
            <Row>
            {isLoading ?   <><Loader/></> :
            <>
            
            {items.map((producto) =>(   
            <>
            <Col lg={3} sm={6} xs={12} >
             <Item  name={producto.name} price={producto.price} image={producto.image} id={producto.id} stock={producto.stock} category={producto.category}/>
            </Col>
            </>
            )
            )}
            </>
              }
            </Row>
        </Container>
         </div>
      
     
      </>
  )
}
