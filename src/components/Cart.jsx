
import { MDBBtn, MDBCard,MDBCardBody,MDBCardImage,MDBCardText,MDBCol,MDBContainer,MDBIcon,MDBInput,MDBRow, MDBTypography} from "mdb-react-ui-kit";
  import React from "react";
import TotalCart from "./TotalCart";
import { useContext} from "react";
import { CartContext } from "./context/cartContext";
import {Col, Row,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import limon from "../img/animacion/limon.json";


export default function Cart() {
  const {deleteItem, cart, deleteAll} = useContext(CartContext);
 console.log(cart)
 const vaciar = () => {
  deleteAll();
}

  return (
    <div className="" >
        <>
    {cart.length === 0 ?
    (<Row>
        <Col xs={12} >
          <div className="carrito-vacio">
          <p>Tu carrito esta vacio,</p>
          <p> agrega algún producto para hacernos feliz</p>
          <Player  src={limon} className="player" loop autoplay speed={1}/>
          
          <Link to={'/'} className="no-underline">
            <center> <MDBBtn className="boton-count">Ir a catálogo</MDBBtn></center>
         
          </Link>
          </div>
        </Col>
      </Row>) :
   (<>
   
        <section className="h-100 h-custom cart">
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol size="12">
                <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                  <MDBCardBody className="p-0">
                    <MDBRow className="g-0">
                      <MDBCol lg="8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <MDBTypography tag="h1" className="fw-bold mb-0 tit-cart">
                              Deetalle de compra
                            </MDBTypography>
                            <MDBTypography className="mb-0 subt-cart">
                            Productos:
                            </MDBTypography>
                          </div>
        
                          <hr className="my-4" />
                          {cart.map((product,i)=>{
                          return(
                          <MDBRow className="mb-4 d-flex justify-content-between align-items-center">

                            <MDBCol md="2" lg="2" xl="2">
                              <MDBCardImage
                                src={product.image}
                                fluid className="rounded-3" alt="Cotton T-shirt" />
                            </MDBCol>

                            <MDBCol md="3" lg="3" xl="3">
                              
                              <MDBTypography tag="h6" className="text-muted"> Categoria:
                              
                              </MDBTypography>
                              <MDBTypography tag="h6" className="text-black mb-0">
                              {product.name}
                              </MDBTypography>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className="d-flex align-items-center">
                            <p>{product.cantidad}</p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className="text-end">
                              <MDBTypography tag="h6" className="mb-0">
                                $ {product.price}  USD
                              </MDBTypography>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className="text-end">
                              <a href="#!" className="text-muted">
                                <MDBIcon  onClick={()=>deleteItem(product.id)} fas icon="times" />
                              </a>
                            </MDBCol>
                          
                          </MDBRow>
        
                              )
                            })}
                            <MDBContainer>
                              <MDBRow>
                                <MDBCol size='md'>
                                <div className="pt-5">
                                  <Link to={'/'} className="no-underline">
                                      <MDBIcon fas icon="long-arrow-alt-left me-2 text-red" /> 
                                     <span className="subt-cart">Regresar a la tienda</span> 
                                  </Link>
                                </div>
                                </MDBCol>
                                <MDBCol size='md'>
                                
                                </MDBCol>
                                <MDBCol size='md'>
                                <MDBBtn onClick={vaciar} className='boton' block size="lg">
                                Remover todos 
                                  </MDBBtn>
                                </MDBCol>
                              </MDBRow>
                            </MDBContainer>
                        </div>
                      </MDBCol>
                      <MDBCol lg="4" className="bg-grey">
                        <div className="p-5">
                        <TotalCart/>
                          
                          <Link to={'/checkout'} className="no-underline">
                            <div className='boton-rojo' block size="lg">Finalizar compra</div>
                          </Link>
                         
                          
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
      </section>

    
     
    </>)
    }
    
    </>

      

    </div>
  )
}
