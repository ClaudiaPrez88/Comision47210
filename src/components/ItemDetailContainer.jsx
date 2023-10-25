import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import {Container,Row,Col} from 'react-bootstrap'
import {getFirestore,getDocs,collection,query,where} from 'firebase/firestore'

export default function ItemDetailContainer() {

    const [product, setProduct] = useState ([])
    const {productoId} = useParams()

    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db,"items"),where("id", "==", productoId));
    
        getDocs(q).then( (snapshot) => {
          if(snapshot.size === 0){
            console.log("no hay resultados");
          }
          setProduct(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}) ) );
        });
      }, []);
     
    
  return (
    <div>
        <Container className='card-detalle' fluid>
        <Row>
          <Col xs='12' md={{offset: 3, span: 6}}>
          
          {product.map((product)=>(
          <ItemDetail stock={product.stock} image={product.image} price={product.price} id={product.id} name={product.name} description={product.description}/>
          ))}
          </Col>
        </Row>
       </Container>
    </div>
  )
}
