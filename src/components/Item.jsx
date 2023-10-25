import {MDBBtn,MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBRipple,MDBRow, MDBTypography, } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";



export const Item = ({name,image,stock,price,category,id}) => {

    return (
      <div className="item">
        <MDBCard className="mb-4">
              
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
                      <MDBCardHeader className="">
                    <MDBTypography tag="h5" className="mb-0 subt-cart text-red">
                      {name}
                    </MDBTypography>
                  </MDBCardHeader>
                    <p className="text-start">
                      <strong>${price} USD x KG</strong>
                    </p>
                    <Link className="boton-item" to={`/producto/${id}`}>
                    <MDBBtn block size="lg" className="boton"> comprar</MDBBtn>
                    </Link>
                    <div className="botones-item">
                      
                     
                    </div>
                    
                    </MDBRipple>
              </MDBCardBody>
        </MDBCard> 
      </div>
       
      
    )
  }
  