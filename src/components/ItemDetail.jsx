
import { Container,Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {MDBCard, MDBCardBody,MDBCardTitle, MDBCardText,MDBCardImage,} from 'mdb-react-ui-kit';
import ItemCount from './ItemCount';
//  import { useProductById } from './Hooks/useProductsById';
import { useContext } from 'react';
import { CartContext} from './context/cartContext';
import { useEffect, useState } from 'react';
import {getFirestore,getDocs,collection,query,where} from 'firebase/firestore';
import {db} from "../firebase"


export const ItemDetail = ({id, name, image, description, stock, price}) => {
  const [cant,setCant] = useState(true); 
  const {productoId} = useParams();
  const CartInfoContext = useContext(CartContext);
  const {agregarProducto} = useContext(CartContext)
  const [items, setItems] = useState([]);
  // creo un hook para traer los productos de firebase y filtrarlo por el id con useParams

  // useEffect(() => {
  //   const db = getFirestore();
  //   const itemsCollection = collection(db,'items');

  //  getDocs(itemsCollection).then((snapshot) => {
  //     if(!snapshot.empty){
  //       setItems(snapshot.docs.map(doc=>{
  //         return{
  //           id: doc.id,
  //           ...doc.data()
  //         }
  //       }))
  //     }
  //   });
  // },[])
  // const nombre = items.filter(producto => producto.id == productoId);

  useEffect(() => {
    const q = query(collection(db,"items"),where("id", "==", productoId));
    getDocs(q).then( (snapshot) => {
      if(snapshot.size === 0){
        console.log("no hay resultados");
      }
      setItems(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}) ) );
    });
  }, []);

const onAdd = (cantidadSeleccionada) =>{
  setCant(cantidadSeleccionada);
  const item = { id, name, image, description, stock, price}
  agregarProducto(item,cantidadSeleccionada)
}

  return (
    
         <div>
         
        <MDBCard>
        <Container>
            <Row>
            <Col xl={6} lg={12} sm={12}>
              <MDBCardImage src={image} position='top' alt={name} className="imagen-detalle"/>
              </Col>
              <Col xl={6} lg={12} sm={12}>
                <MDBCardBody>
                  <MDBCardTitle className='subt-cart text-red'>{name}</MDBCardTitle>
                  <MDBCardText>
                   {description}
                  </MDBCardText>
                    <h5 className='subt-cart text-red'>Stock:{stock}</h5>
                    <h5 className='subt-cart text-red'>Precio: {price}</h5>
                  <ItemCount stock={stock} initial={0} onAdd={onAdd}/> 
                </MDBCardBody>
                </Col>
            </Row>
          </Container>
        </MDBCard>
          
          
        </div>
      
  )
}
