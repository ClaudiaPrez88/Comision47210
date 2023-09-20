import {MDBIcon,MDBInput, MDBBtn,MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBRipple,MDBRow, MDBTypography, } from "mdb-react-ui-kit";
import { useState } from 'react';
export const Item = ({name,image,stock,price,id}) => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount ((count) => count + 1 )
  }
  
const decrementar = () =>{
    setCount ((count) => count - 1)
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
                    <div className="botones-item">
                      
                      <MDBCol  lg="12" xl="12"
                  className="d-flex align-items-center justify-content-around">
                      <MDBBtn className="px-3 me-2" disabled={count === 0} onClick={decrementar}>
                        <MDBIcon fas icon="minus"/>
                      </MDBBtn>

                    <MDBInput value={count} min={0} type="number" label="Cantidad"/>

                      <MDBBtn  onClick={incrementar}  className="px-3 ms-2" disabled={count === stock} ><MDBIcon fas icon="plus"/></MDBBtn> 
                      </MDBCol>
                    </div>
                    
                    </MDBRipple>
              </MDBCardBody>
        </MDBCard> 
      
    )
  }
  