import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'


const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">BajaMobileMechanic</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-Navbar-nav" />
      <Navbar.Collapse id="basic-Navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link href="#about-us">About Us</Nav.Link>
          <Nav.Link href="#book-appointment">Book an Appointment</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar