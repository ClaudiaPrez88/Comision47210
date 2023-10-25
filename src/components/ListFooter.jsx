import React from 'react';
import { FooterRoutes } from '../routes/routes-footer';
import { NavLink } from 'react-router-dom';




export default function ListFooter({items,titulo}) {
  return (
    <div>
        <h3 className='tit-footer'>{titulo}</h3>
          <ul className="footer-list">
                {items.map((item, index)=>(
                  <li className="nav-item" key={index}>
                    <NavLink to={item.path} className={({isActive,isPending}) => 
                    isPending ? 'pending' : isActive ? 'active' : 'pending'}>
                        {item.name}
                    </NavLink>
                </li>
                )
                )}
              
          </ul>
    </div>
  )
}

