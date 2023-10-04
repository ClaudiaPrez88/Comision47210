import {useState,useEffect} from 'react';
import logo from '../img/svg/logo.svg';
import { Categorias } from './Categorias';
import ItemListDrop from './ItemListDrop';
import { CarWidget } from './CarWidget';
import { NavLink } from 'react-router-dom';
import { NavbarRoutes } from '../routes/routes';



export const NavBar = () => {
 
  return (
    <>
    
   <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <NavLink to={'/'}>
    <img src={logo} className="logo react" alt="Ductos" />
    </NavLink>
    
    
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {NavbarRoutes.map((route)=>(
           <li class="nav-item">
           <NavLink to={route.path} className={({isActive,isPending}) => 
           isPending ? 'pending' : isActive ? 'active' : 'pending'
         }>
             {route.name}
           </NavLink>
         </li>
        )
        )}
       
      </ul>
    </div>
    <CarWidget/>
  </div>
    </nav>
   
    </>
  )
}