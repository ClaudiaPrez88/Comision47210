import {MDBBtn,MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBRipple,MDBRow, MDBTypography, } from "mdb-react-ui-kit";
import { useState } from 'react';
export const Item = ({name,image,stock,price,id}) => {
  const [Aumentar,setAumentar ]= useState(0);
  function disminuir() {
      if (Aumentar <= 0 ) {
          setAumentar (0);
      }   
     else
      setAumentar(Aumentar - 1);
    }
  
    
    return (
      
       <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  {name}
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                    <MDBRipple rippleTag="div" rippleColor="light"
                      className="bg-image rounded hover-zoom hover-overlay">
                      <img
                        src={image}
                        className="w-100" />
                      <a href="#!">
                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" , }}>
                        </div>
                      </a>
                      <p>
                      <strong>Stock:{stock}</strong>
                    </p>
                    <p className="text-start">
                      <strong>Id: ${id}</strong>
                    </p>
                    <p className="text-start">
                      <strong>Precio: ${price}</strong>
                    </p>
                    <MDBBtn block size="lg">Ver detalle</MDBBtn>
                   
                    </MDBRipple>
              </MDBCardBody>
        </MDBCard> 
      
    )
  }
  