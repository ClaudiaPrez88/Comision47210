
import logo from '../img/svg/logo.svg';
import { CartWidget } from './CartWidget';
import { NavLink } from 'react-router-dom';
import { NavbarRoutes } from '../routes/routes';



export const NavBar = () => {
 
  return (
    <>
    
   <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      
          <NavLink to={'/'}>
            <img src={logo} className="logo react" alt="Pompom" />
          </NavLink>
      
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div>
              <ul className="navbar-nav mb-2 mb-lg-0">
                {NavbarRoutes.map((route)=>(
                  <li className="nav-item">
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
        </div>
        
        <CartWidget/>
        
      </div>
    </nav>
   
    </>
  )
}