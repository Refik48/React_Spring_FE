import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Listele</Nav.Link>
            <Nav.Link href="#link">Ekle</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
