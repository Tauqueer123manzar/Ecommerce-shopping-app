import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
   <>
    <Navbar bg="dark" expand="lg"  variant='dark' collapseOnSelect>
    <Container>
      <Navbar.Brand href="#" style={{color:"pink",fontSize:"28px",fontWeight:"700"}}>Onine Shopping</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-center"
          style={{maxHeight:"100%",maxWidth:"100%"}}>
          <Nav.Link href="#cart">
          <i className="fa-solid fa-cart-shopping"></i>
          &nbsp; CART</Nav.Link>
          <Nav.Link href="#signin">
          <i className="fa-solid fa-user"></i>
          &nbsp; SINGIN</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   </>
  )
}

export default Header
