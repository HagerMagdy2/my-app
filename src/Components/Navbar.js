import React from 'react';
import { Container, Nav,Button, Navbar as NavBar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return <NavBar sticky='top' className='bg-white shadow-sm mb-3'>
    <Container>
    <Nav>
      <Nav.Link to={"/"} as={NavLink}>Home</Nav.Link>
      <Nav.Link to={"/about"} as={NavLink} >About</Nav.Link>
      <Nav.Link to={"/store"} as={NavLink} >Strore</Nav.Link>
    
    </Nav>
    <Button variant='outline-primary' className='rounded-circle'>cart</Button>
    
    </Container>
  </NavBar>
  
  
};

export default Navbar