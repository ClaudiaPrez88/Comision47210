
import './App.css'
import { NavBar } from './components/NavBar';
import Animacion from './components/Animacion';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { ListaProductos } from './components/services/ListaProductos';
import ProductosByName from './components/services/ProductosByName';
import { ItemDetail } from './components/ItemDetail';
import { ProductoByCategory } from './components/services/ProductoByCategory';
import { CartContext } from './components/context/cartContext';





function App() {


  return (
    <>
    <CartContext.Provider value={[]}>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer/>}/>
        <Route path='/category/:productoCategory' element={ <ProductoByCategory/>}/>
        <Route path='/producto/:productoId' element={<ItemDetail/>}/>
        <Route path='*' element={ <Animacion/>}/>
      </Routes>
         
        
    </BrowserRouter>
    </CartContext.Provider>
    </>
  );
}






export default App
