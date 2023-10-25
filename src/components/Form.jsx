import React from 'react'; 
import { CartContext } from './context/cartContext';
import { useContext } from 'react';

const Formulario = ({ handleChange, data, handleSubmit }) => {
 const {cart} = useContext(CartContext);

 const isFormValid = data.name !== '' && data.phone !== '' && data.email !== '' && cart.length > 0;
   
  
    return (
        <div className="form text-center">
            <form class="text-center border border-light p-5" onSubmit={handleSubmit}>

            <h3 className='text-form'>Datos para facturación</h3>

            <div>
           
                <input
                    placeholder="Nombre"
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                    class="form-control mb-4"
                />
                </div>
                <div>
                <input
                    placeholder="Email"
                    id="email"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    class="form-control mb-4"
                />
                </div>
                <div>
                <input
                    placeholder="Telefono"
                    id="phone"
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    value={data.phone}
                    class="form-control mb-4"
                />
                </div>
                

                <div class="d-flex justify-content-around">
                <button type="submit" disabled={!isFormValid}  className='btn btn-primary boton'>Finalizar compra</button>
                </div>
            </form>
        </div>
    );
};

export default Formulario;
