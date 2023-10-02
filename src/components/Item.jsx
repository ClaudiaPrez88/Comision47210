import {MDBBtn,MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBRipple,MDBRow, MDBTypography, } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";



export const Item = ({name,image,stock,price,category,id}) => {

    return (
      <div className="item">
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
                      <strong>Categoria:<br></br>{category}</strong>
                    </p>
                    <p className="text-start">
                      <strong>Precio: ${price}</strong>
                    </p>
                    <a className="boton-item" href={`/producto/${id}`}>
                    <MDBBtn block size="lg"> 
                    
                      detalle
                      </MDBBtn></a>
                    <div className="botones-item">
                      
                     
                    </div>
                    
                    </MDBRipple>
              </MDBCardBody>
        </MDBCard> 
      </div>
       
      
    )
  }
  