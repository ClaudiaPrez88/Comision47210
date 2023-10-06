
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


function App() {


  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer/>}/>
        <Route path='/category/:productoCategory' element={ <ProductoByCategory/>}/>
        <Route path='/producto/:productoId' element={<ItemDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={ <Animacion/>}/>
      </Routes>
         
        
    </BrowserRouter>
    </CartProvider>
    </>
  );
}






export default App
