import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function BasicNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = `custom-navbar sticky-top ${scrolled ? 'scrolled' : ''}`;

  return (
    <Navbar expand="lg" className={navbarClass} variant="light">
      <Container>
        <Navbar.Brand href="/" className="nav-brand ms-5">Ashter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="/about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="/doctors" className="nav-link-custom">All Doctors</Nav.Link>
            <Nav.Link href="/contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;
