import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBIcon,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
  } from "mdb-react-ui-kit";
import { useEffect,useState } from 'react';
import data from '../../products.json';
import ItemCount from "./ItemCount";


export const ItemListContainer = () => {

  const [productos,setProductos] = useState([])

  const pedirProductos = () =>{
   return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
     
   })
  }
  useEffect(() => {
   pedirProductos()
   .then((res)=>{
      setProductos(res);
   });
  }, []);
  
  return (
    <div>
        {productos.map((producto) =>(
            <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">
                {producto.name}
              </MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBRow>
                <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                  <MDBRipple rippleTag="div" rippleColor="light"
                    className="bg-image rounded hover-zoom hover-overlay">
                    <img
                      src={producto.image}
                      className="w-100" />
                    <a href="#!">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" , }}>
                      </div>
                    </a>
                  </MDBRipple>
                </MDBCol>
  
                <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                  <p>
                    <strong>Stock:{producto.stock}</strong>
                  </p>
                  <p className="text-start">
                    <strong>Precio: ${producto.price}</strong>
                  </p>
                  
                  <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                    title="Remove item">
                    <MDBIcon fas icon="trash" />
                  </MDBTooltip>
  
                  <MDBTooltip wrapperProps={{ size: "sm" , color: "danger" }} wrapperClass="me-1 mb-2"
                    title="Move to the wish list">
                    <MDBIcon fas icon="heart" />
                  </MDBTooltip>
                </MDBCol>
                <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                    <ItemCount/>
                    <MDBBtn block size="lg">Añadir a carrito</MDBBtn>
                </MDBCol>
              </MDBRow>
  
              <hr className="my-4" />
  
            </MDBCardBody>
          </MDBCard>
        )
        )}
    </div>
  )
}





