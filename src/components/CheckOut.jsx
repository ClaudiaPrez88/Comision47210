import React from 'react';
import { useContext,useState } from 'react';
import { CartContext } from './context/cartContext';
import { collection,addDoc, serverTimestamp } from 'firebase/firestore';
import Formulario from './Form';
import { Container,Row,Col } from 'react-bootstrap';
import { db } from "./../firebase";



export default function CheckOut() {
  const {cart,precioTotal} = useContext(CartContext);
  const [orderId, setOrderId] = useState('');
  const [data, setData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
        ...data,
        [name]: value,
    });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const objOrden = {
    ...cart,
      buyer: {
          name: data.name,
          phone: data.phone,
          email: data.email,
      },
      items : [{id:1,titulo:"Compra"}],
      precioTotal: precioTotal(),
      date: serverTimestamp(),
  };
  
  console.log(...cart)
  const ref = collection(db, 'orders');
  addDoc(ref, objOrden).then((response) => {
      setOrderId(response.id);
  });
};

  if (orderId !== '') {
    return  (
      <Container  id="checkout">
        <Row>
            <Col xs={12}>
          <h4 className='anuncio'>Gracias por tu compra, tu número de envío es: {orderId}</h4>
            </Col>
        </Row>
    </Container>
    )}

  return (
    <div>
      <Container id='' fluid>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <p className='anuncio'>
            Escribe tus datos en el formulario y haz click en el botón "finalizar compra" para enviarnos tu pedido. 
            </p>
            <Formulario
                        handleChange={handleChange}
                        data={data}
                        handleSubmit={handleSubmit}
                    />
            
          
          </Col>
        </Row>
    </Container>
    </div>
  )
}
