import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Download } from 'lucide-react';
import './Header.css';
import logo from '../../../assets/logo-orange.svg';
export const Header: React.FC = () => {
  return (
    <Navbar expand="lg" className="navbar-fitze sticky-top bg-white py-2">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <div className="brand-logo-container">
            <img src={logo} alt="fitze Logo" className="brand-logo" />
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto navbar-nav-links ">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#how-it-works">How It Works</Nav.Link>
            <Nav.Link href="#fitze-ring">Fitze Ring</Nav.Link>
            <Nav.Link href="#compatibility">Compatibility</Nav.Link>*/}
            <Nav.Link href="/" className={location.pathname === '/' ? 'active-nav' : ''}> Home</Nav.Link> 
            <Nav.Link href="/ring" className={location.pathname === '/ring' ? 'active-nav' : ''}> Ring</Nav.Link> 
            <Nav.Link href="/streaks" className={location.pathname === '/streaks' ? 'active-nav' : ''}> Streaks</Nav.Link> 
            <Nav.Link href="/corporates" className={location.pathname === '/corporates' ? 'active-nav' : ''}> Corporate</Nav.Link> 
            <Nav.Link href="/brand" className={location.pathname === '/brand' ? 'active-nav' : ''}> Brands</Nav.Link> 
            <Nav.Link href="/pro" className={location.pathname === '/pro' ? 'active-nav' : ''}> PRO</Nav.Link> 
          </Nav>
          <div className="nav-action-btn">
            <a href="https://www.fitze.ae/share/" target="_blank" className="btn-header-download">
              Download the app
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
