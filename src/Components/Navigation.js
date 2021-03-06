import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./Navigation.css";
import logo from "../Assets/logo.jpeg";
import { Link } from "react-router-dom";
const Navigation = ({ usuario }) => {
  let [perfil, setPerfil] = useState();
  useEffect(() => {
    setPerfil(usuario.person.picture);
  });
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="65"
                height="65"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/" className="mt-2">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link className="mt-2">
                <Link to="/user"> User</Link>
              </Nav.Link>
              <Nav.Link className="mt-2">
                <Link to="/"> Match</Link>
              </Nav.Link>
              <Nav.Link href="/user">
                <img
                  className="foto-perfil"
                  src={perfil}
                  height="35"
                  width="35"
                ></img>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
