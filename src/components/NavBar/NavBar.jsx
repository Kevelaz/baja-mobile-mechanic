import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/logo-5.png"
import './NavBar.css'

const NavigationBar = () => {
  return (
    <Navbar variant="dark" expand="lg" id="nav-bar-container">
        <Navbar.Brand href="/" className="brand-name">
          <img src={Logo} alt="BMM logo" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-Navbar-nav" />
        <Navbar.Collapse id="basic-Navbar-nav" className="justify-content-end nav-pills">
          <Nav className="mr-auto">
            <Nav.Link to="/" href="/">About Us</Nav.Link>
            <Link to="/book-appointment" className="book-app">Book an Appointment</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar