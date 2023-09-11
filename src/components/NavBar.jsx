import React from 'react';
import logo from '../img/svg/logo.svg';
import { Categorias } from './Categorias';
import ItemListDrop from './ItemListDrop';
import { CarWidget } from './CarWidget';



export const NavBar = () => {
  return (
    <>
   
   <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src={logo} className="logo react" alt="Ductos" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* Listado de categorias  */}
       <Categorias texto='Categoria 1' />
       <Categorias texto='Categoria 2' />
       <Categorias texto='Categoria 3' />
       {/* Listado de categorias dropdown */}
        <ItemListDrop categoria='gggg' subcategoria='rrrr' link ='rrrr'/>
      </ul>
    </div>
    <CarWidget/>
  </div>
    </nav>
    </>
  )
}