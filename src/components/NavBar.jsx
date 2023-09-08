import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import logo from '../img/svg/logo.svg';
import { CarWidget } from './CarWidget';



export const NavBar = () => {
  return (
    <>
    <Container fluid>
      <Row>
        <Navbar collapseOnSelect expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#logo">
          <img src={logo} className="logo react" alt="Ductos" />
          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Instalación y programación CCTV</Nav.Link>
                <Nav.Link href="#">Alarmas</Nav.Link>
                <Nav.Link href="#">Citonía</Nav.Link>
                <Nav.Link href="#">Sistemas de incendios</Nav.Link>
                <Nav.Link href="#">Red interna telecomunicaciones</Nav.Link>
                
                <NavDropdown title="Otros Servicios" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  <CarWidget/>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
      </Row>
    </Container>
    </>
  )
}