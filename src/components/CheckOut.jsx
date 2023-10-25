import React from 'react';
import { useContext,useState } from 'react';
import { CartContext } from './context/cartContext';
import {getFirestore, collection,addDoc, serverTimestamp,writeBatch,getDocs,query, where,and,doc,updateDoc } from 'firebase/firestore';
import Formulario from './Form';
import { Container,Row,Col } from 'react-bootstrap';
import { db } from "./../firebase";
import Swal from 'sweetalert2';



export default function CheckOut() {
  const {cart,precioTotal,deleteAll} = useContext(CartContext);
  const [orderId, setOrderId] = useState('');
  const [data, setData] = useState({ name: '', email: '', phone: '' });
  

  const cartDatos = cart.map((objeto) => ({
    id: objeto.id,
    name: objeto.name,
    cantidad: objeto.cantidad,
    price: objeto.price,
  }));
  

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
    
      buyer: {
          name: data.name,
          phone: data.phone,
          email: data.email,
      },
      Items: cartDatos,
      precioTotal: precioTotal(),
      date: serverTimestamp(),
  };
  
  const ref = collection(db, 'orders');
  addDoc(ref, objOrden).then((response) => {
      setOrderId(response.id);
      
  });
  Swal.fire({
    icon: 'success',
    title: 'Formulario enviado con éxito',
    showConfirmButton: false, // Oculta el botón de confirmación
    timer: 2000, // Cierra automáticamente después de 2 segundos (ajusta según tus necesidades)
  });
  deleteAll()
};

const updateOrder = () => {
  const db = getFirestore();

  const orderDoc = doc(db, "orders", "waxvoC1Qzl6MWRdDEMmF");
  updateDoc(orderDoc, { precioTotal: 1000 }).then(() => {
    console.log("Documento actualizado");
  });
};

  if (orderId !== '') {
    return  (
      <Container  id="checkout" fluid>
        <Row>
            <Col xs={12}>
          <h4 className='anuncio'>Gracias por tu compra, tu número de envío es: {orderId}</h4>
          {/* <button onClick={updateOrder}>Actualizar compra</button> */}
            </Col>
        </Row>
    </Container>
    )}

  return (
    <div>
      <Container className="form-web" id='' fluid>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
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
