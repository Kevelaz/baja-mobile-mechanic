import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav} from 'react-bootstrap'
import './NavBar.css'

const NavigationBar = () => {
  return (
    <Navbar variant="dark" expand="lg" id="nav-bar-container">
      <Navbar.Brand href="/" className="brand-name">
        <img src="src/assets/imgs/logo-5.png" alt="BMM logo" className="logo-img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-Navbar-nav" />
      <Navbar.Collapse id="basic-Navbar-nav" className="justify-content-end nav-pills">
        <Nav className="mr-auto">
          <Nav.Link to="/" href="/">About Us</Nav.Link>
          <Nav.Link to="/book-appointment" href="/book-appointment">Book an Appointment</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar