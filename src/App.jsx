
import './App.css'
import { NavBar } from './components/NavBar';
import Animacion from './components/Animacion';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { ItemDetail } from './components/ItemDetail';
import { ProductoByCategory } from './components/services/ProductoByCategory';
import { CartProvider } from './components/context/cartContext';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';
import {getFirestore,getDocs,collection} from 'firebase/firestore'
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import CheckOut from './components/CheckOut';



function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/>}/>
          <Route path='/category/:productoCategory' element={ <ProductoByCategory/>}/>
          <Route path='/producto/:productoId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='*' element={ <Animacion/>}/>
        </Routes>
        <Footer/>
          
      </BrowserRouter>
    </CartProvider>
    </>
  );
}






export default App
