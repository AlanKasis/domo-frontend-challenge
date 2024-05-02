import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-transparent z-50">
      <Container>
        <Navbar.Brand className="text-white" href="#home">compleet labs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-end w-100">
            <Nav.Link className="text-white" href="#home">Home</Nav.Link>
            <Nav.Link className="text-secondary" href="#link">Services</Nav.Link>
            <Nav.Link className="text-secondary" href="#link">Technology</Nav.Link>
            <Nav.Link className="text-secondary" href="#link">Case studies</Nav.Link>
            <Nav.Link className="text-secondary" href="#link">About</Nav.Link>
            <Nav.Link className="text-white" href="#link">Hire us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header