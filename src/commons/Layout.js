import React from 'react';
import { Col, Nav, Navbar, Row } from 'react-bootstrap';

function Layout({ children }) {
   return (
      <>
         <Navbar bg='primary' variant='dark' sticky='top' style={{marginBottom: '20px'}}>
            <Navbar.Brand href='/'>Contact Us</Navbar.Brand>
            <Nav style={{float:'right', color:'white'}}>
               <Nav.Link href='/'>Contact Us</Nav.Link>
               <Nav.Link href='/aboutus'>About US</Nav.Link>
            </Nav>
         </Navbar>
         <Row>
            <Col sm={4} md={{ span: 4, offset: 4 }}>
               {children}
            </Col>
         </Row>
      </>
   )
}
export default Layout;