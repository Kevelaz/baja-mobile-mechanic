import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'
import './NavBar.css'

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/" className="text-danger">BajaMobileMechanic</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-Navbar-nav" />
      <Navbar.Collapse id="basic-Navbar-nav" className="justify-content-end nav-pills">
        <Nav className="mr-auto">
          <Nav.Link href="/">About Us</Nav.Link>
          <Nav.Link href="/book-appointment">Book an Appointment</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar