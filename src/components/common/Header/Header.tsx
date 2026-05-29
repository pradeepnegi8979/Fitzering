import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Download } from 'lucide-react';
import './Header.css';
import logo from '../../../assets/logo-black.svg';
export const Header: React.FC = () => {
  return (
    <Navbar expand="lg" className="navbar-fitze sticky-top bg-white">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <div className="brand-logo-container">
            
            <img src={logo} alt="fitze Logo" className="brand-logo" />
            
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto navbar-nav-links">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#how-it-works">How It Works</Nav.Link>
            <Nav.Link href="#fitze-ring">Fitze Ring</Nav.Link>
            <Nav.Link href="#compatibility">Compatibility</Nav.Link>*/}
            <Nav.Link href="/ring"> Ring</Nav.Link> 
            <Nav.Link href="/streaks"> Streaks</Nav.Link> 
            <Nav.Link href="/corporates"> Corporate</Nav.Link> 
            <Nav.Link href="/pro"> Pro</Nav.Link> 
            <Nav.Link href="/brand"> Brand</Nav.Link> 
          </Nav>
          <div className="nav-action-btn">
            <a href="#download" className="btn-header-download">
              Download the app
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
