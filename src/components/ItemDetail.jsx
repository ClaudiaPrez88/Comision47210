import React from 'react';

import { useEffect,useState } from 'react';
import { getProductoByName } from './services/productos';
import { Container,Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { MDBCard,MDBCardBody,MDBCardImage,MDBIcon,} from "mdb-react-ui-kit";
import loading from '../../src/img/animacion/loading.json';
import { Player } from '@lottiefiles/react-lottie-player';

export const ItemDetail = () => {
  // Creo el useSate para generar mi objeto de array que contendra la info de mi Promesa
const [productos,setProductos] = useState(null);
//useParams me dara el valor que la url genera, con el parametro de "productoId", para asi luego usarlo y filtrar 
const {productoId} = useParams();

     //useEffect 
   useEffect(() => {
    getProductoByName(productoId)
    .then((data) => setProductos(data))
   }, [productoId]);

  if (!productos) {
    return(
      <Player
        src={loading}
        className="player"
        loop
        autoplay
        speed={1}
        />
    );
  }
   const nombre = productos.filter(producto => producto.id == productoId);
console.log(nombre);

const miProducto = nombre[0];
  return (
    
      <>
     
         <div>
        <Container id='item-detail'>
          <Row className="justify-content-md-center">
            <Col lg={6} xs={12}>
            <MDBCard>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">{miProducto.name}</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x{miProducto.stock}</p>
              </div>
            </div>
            <MDBCardImage
              src={miProducto.image}
              position="top"
              alt="Laptop"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                  Categorias
                  </a>
                </p>
                <p className="small">
                  {miProducto.category}
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">Precio</h5>
                <h5 className="text-dark mb-0">${miProducto.price} CLP</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  Stock: <span class="fw-bold">{miProducto.stock}</span>
                </p>
                <div class="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
            </Col>
          </Row>
        </Container>
         </div>
      
     
      </>
  )
}
