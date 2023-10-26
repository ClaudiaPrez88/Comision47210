import React , { useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './context/cartContext';
import {  MDBTypography,MDBCol,MDBContainer,MDBRow} from "mdb-react-ui-kit";

function TotalCart() {
    const {precioTotal,cantidadTotal} = useContext(CartContext);
    
   


  return (
    <>
     <MDBContainer className="py-5 h-100">
     <MDBRow className="justify-content-center align-items-center h-100">
      
        <MDBCol sm="12"  xl="12">
        <MDBTypography tag="h5" className='precio'><span className='total-text'>Productos:</span>{cantidadTotal()} u</MDBTypography>
        </MDBCol>
      
      <MDBCol sm="12"   xl="12">
            <MDBTypography tag="h5" className='precio'><span className='total-text'>Total:</span> $ {precioTotal()} USD</MDBTypography>
      </MDBCol>
    </MDBRow>
    </MDBContainer>

    
    </>
  )
}

export default TotalCart