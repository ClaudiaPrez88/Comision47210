import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar';
import { Categorias } from './components/Categorias';
import Animacion from './components/Animacion';
import {ItemListContainer} from './components/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <NavBar/>
      <ItemListContainer nombre='Claudia'/>
     <Animacion/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
    </>
  )
}

export default App
