import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import logo from "../../src/img/svg/logo-blanco.svg";
import ListFooter from './ListFooter';
import { FooterRoutes } from '../routes/routes-footer';
import { LinksInteres } from '../routes/routes-footer';
import borde from "../img/borde.png";
import { useParams,useLocation } from 'react-router-dom';

export default function Footer() {

  const { pathname } = useLocation();
 
 // Función para determinar la clase de fondo
 const getBackgroundClass = () => {
  if (pathname === '/') {
    return 'home-background';
  } else if (pathname.includes('category')) {
    return 'category-background';
  } else if (pathname.startsWith('/producto/')) {
    return 'product-background';
  }if (pathname === '/cart') {
    return 'cart-background';
  }
  return 'default-background';
};

  return (
    <div>
        <Container fluid>
            <Row>
              <Col lg={12} className={getBackgroundClass()}>
              <img src={borde} className="borde-footer" alt="Pompom" />
              </Col>
                <Col lg={3} className='footer'>
                <img src={logo} className="logo-footer" alt="Pompom" />
                </Col>
                <Col lg={3} className='footer'>
                    <ListFooter items={FooterRoutes} titulo="Links utiles"/>
                </Col>
                <Col lg={3} className='footer'>
                <ListFooter items={LinksInteres} titulo="Otros"/>
                </Col>
                <Col lg={3} className='footer'>
                
                </Col>
            </Row>
        </Container>
    </div>
  )
}
