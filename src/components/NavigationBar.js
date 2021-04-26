import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import routes from '../data/routes';

const Styles = styled.div`
  .navbar {
    background-color: rgb(4, 104, 140);
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #fff;
    // &:hover {
    //   color: white;
    // }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" fixed="top">
      <Navbar.Brand href="/">SenseForm</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        {routes.filter((l) => !l.index).map((l) => (
             <Nav.Item key={l.label}>
                 <Nav.Link >
                 <Link to={l.path}>{l.label}</Link>
                 </Nav.Link>
            
          </Nav.Item>
        ))}
          {/* <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)