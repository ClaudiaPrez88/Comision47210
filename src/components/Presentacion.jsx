import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import logo from "../img/svg/logo-blanco.svg";
import { MDBBtn} from 'mdb-react-ui-kit';



export default function Presentacion() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col className='presentacion'>
                    <div>
                    <img src={logo} className="logo-presentacion" alt="Logo" />
                    </div>
                    <div>
                        <a href='#item-list-container'>
                        <MDBBtn className="boton">Ver productos</MDBBtn>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
