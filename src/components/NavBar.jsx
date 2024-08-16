import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css'
import { CartWidget } from "./CartWidget";
import { LogoWidget } from "./LogoWidget";

export const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
      <Navbar.Brand>
          <NavLink to="/" className="logo"><LogoWidget /></NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto navbar-links">
          <NavLink to="category/Glaceadas">Glaceadas</NavLink>
          <NavLink to="category/Glaceadas Topping">Glaceadas Topping</NavLink>
          <NavLink to="category/Rellenas">Rellenas</NavLink>
          <NavLink to="category/Bebidas">Bebidas</NavLink>
          <NavLink to="category/Café">Café</NavLink>
        </Nav>
        <Nav className="me-auto navbar-links">
          <CartWidget />
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
