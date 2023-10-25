

import { useState } from 'react';
import { Link } from "react-router-dom";
import { MDBBtn} from 'mdb-react-ui-kit';

function ItemCount({stock,initial,onAdd}) {

  const [isActive2, setIsActive2] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isOff, setOn] = useState(true);
  const [count, setCount] = useState(initial)

  const confirmarCompra = () =>{
    setIsActive2(current2 => !current2);
  }
  const aumentarContador = () => {
    if (count < stock){ setCount (count + 1)} }
  const bajarContador = () => {
    if (count > 0){setCount(count - 1)}}
  const confirmarContador = () => {
    if (count > 0 )  {
    setIsActive(current => !current);
    setOn(current => !current);
    onAdd(count);
    }
    
  }
    
  return (
    <>
    
    <div className={isActive ? 'hide' : ''}>
              <MDBBtn  className="boton-count" variant="outline-primary" onClick={bajarContador}> - </MDBBtn>
                  <span className='count'>{count}</span>
                <MDBBtn className="boton-count" variant="outline-primary" onClick={aumentarContador}>+</MDBBtn>
                <MDBBtn  className="boton-count" variant="outline-primary"  onClick={confirmarContador}>Confirmar</MDBBtn> 
            </div> 
            <p className={isOff ? 'hide' : 'text-green'}>Producto agregado exitosamente</p>
            <div className={isOff ? 'hide' : ''}>
              <Link to='/cart'>
              <MDBBtn className="boton-count" onClick={confirmarCompra} >Terminar mi compra</MDBBtn>
              
              </Link>
            </div>  
         
    </>
  );
}

export default ItemCount;



