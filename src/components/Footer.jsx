import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import logo from "../../src/img/svg/logo-blanco.svg";
import ListFooter from './ListFooter';
import { FooterRoutes } from '../routes/routes-footer';
import { LinksInteres } from '../routes/routes-footer';
import borde from "../img/borde.png";
import { useLocation } from 'react-router-dom';
import { useContext} from "react";
import { CartContext } from "./context/cartContext";
import redes from "../../src/img/svg/redes.svg";

export default function Footer() {

  const { pathname } = useLocation();
  const {cart} = useContext(CartContext);
 // Función para determinar la clase de fondo
 const getBackgroundClass = () => {
  if (pathname === '/') {
    return 'home-background';
  } else if (pathname.includes('category')) {
    return 'category-background';
  } else if (pathname.startsWith('/producto/')) {
    return 'product-background';
  }if (location.pathname === '/cart' && cart.length === 0 ) {
    return 'cart-vacio';
  }
  if (pathname === '/cart') {
    return 'cart-background';
  }
  return 'home-background';
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
                <img src={redes} className="redes-footer" alt="Pompom" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
