import React from 'react'
import {
  Nav,
  Navbar,
  Form,
  Button,
  FormControl,
} from 'react-bootstrap';
const NavBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>

        <Nav className='ml-auto'>
          <Nav.Link href='/signin'>Sign In</Nav.Link>
          <Nav.Link href='/signup'>Sign Up</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>

        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
