import React , { useContext} from 'react'
import {Button, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './context/cartContext';
import { MDBBtn, MDBTypography} from "mdb-react-ui-kit";

function TotalCart() {
    const {precioTotal,cantidadTotal} = useContext(CartContext);
    
   


  return (
    <>
    <div className="d-flex justify-content-between mb-5">
        <MDBTypography tag="h5" className="text-uppercase subt-cart">
        Total productos:
        </MDBTypography>
        <MDBTypography tag="h5" className='text-red'>{cantidadTotal()}</MDBTypography>
    </div>
    <div className="d-flex justify-content-between mb-5">
        <MDBTypography tag="h5" className="text-uppercase subt-cart">
        Total:
        </MDBTypography>
        <MDBTypography tag="h5" className='text-red'>$ {precioTotal()}</MDBTypography>
    </div>

   

    
    </>
  )
}

export default TotalCart