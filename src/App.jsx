
import './App.css'
import { NavBar } from './components/NavBar';
import Animacion from './components/Animacion';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ItemListContainer from './components/ItemListContainer';




function App() {



  return (
    <>
    <NavBar/>
     <ItemListContainer/>
     <Animacion/>
    </>
  )
}

export default App
