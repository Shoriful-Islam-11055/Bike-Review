import React from "react";
import logo from '../images/bike-logo.PNG'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-5">
        <Container>
        <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="40"
          height="30"
          className="d-inline-block align-top rounded-3"
        />{' '}
      <span className="nav-title">BIKE REVIEW</span>
      </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <div class="navbar-nav">
                <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
                <Link class="nav-link" to="/review">REVIEW</Link>
                <Link class="nav-link" to="/dasboard">DASHBOARD</Link>
                <Link class="nav-link" to="/blogs">BLOGS</Link>
                <Link class="nav-link" to="/about">ABOUT</Link>
            </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
