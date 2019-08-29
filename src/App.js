import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

function App() {

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">React-Hooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/list">List of Products</Nav.Link>
          <Nav.Link href="/create">Add Product</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default App;
