import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css'
import { CartWidget } from "./CartWidget";
import { LogoWidget } from "./LogoWidget";

export const NavBar = () => {
    return (
      <Navbar>
        <Container>
          <Navbar.Brand>
            <NavLink to="/" className="logo"><LogoWidget /></NavLink>
          </Navbar.Brand>
          <Nav className="me-auto navbar-links">
            <NavLink to="category/Glaceadas">Glaceadas</NavLink>
            <NavLink to="category/Glaceadas Topping">Glaceadas Topping</NavLink>
            <NavLink to="category/Rellenas">Rellenas</NavLink>
            <NavLink to="category/Bebidas">Bebidas</NavLink>
            <NavLink to="category/Café">Café</NavLink>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    );
}
