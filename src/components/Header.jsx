import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Header.css';
import logo from '../images/ashter logo.png';

function EnhancedNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect path and logged-in user on mount
  useEffect(() => {
    setActiveLink(window.location.pathname);
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  // ✅ Listen for custom event to update user info after login
  useEffect(() => {
    const handleUserLogin = () => {
      const user = JSON.parse(localStorage.getItem('loggedInUser'));
      setLoggedInUser(user);
    };

    window.addEventListener('userLogin', handleUserLogin);
    return () => window.removeEventListener('userLogin', handleUserLogin);
  }, []);

  const handleNavClick = (path) => {
    setActiveLink(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    window.location.href = "/login";
  };

  const navbarClass = `custom-navbar sticky-top ${scrolled ? 'scrolled' : ''}`;

  return (
    <Navbar expand="lg" className={navbarClass} variant="light">
      <Container>
        <Navbar.Brand href="/" className="nav-brand">
          <div className="logo-container">
            <img src={logo} alt="Ashter logo" className="brand-logo" />
            <span className="brand-text">Ashter</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto main-nav">
            <Nav.Link 
              href="/" 
              className={`nav-link-custom ${activeLink === '/' ? 'active' : ''}`}
              onClick={() => handleNavClick('/')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="/about" 
              className={`nav-link-custom ${activeLink === '/about' ? 'active' : ''}`}
              onClick={() => handleNavClick('/about')}
            >
              About
            </Nav.Link>
            <Nav.Link 
              href="/alldoctors" 
              className={`nav-link-custom ${activeLink === '/alldoctors' ? 'active' : ''}`}
              onClick={() => handleNavClick('/alldoctors')}
            >
              Doctors
            </Nav.Link>
            <Nav.Link 
              href="/contact" 
              className={`nav-link-custom ${activeLink === '/contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('/contact')}
            >
              Contact
            </Nav.Link>
          </Nav>
         

          <div className="auth-buttons">
            {loggedInUser ? (
              <div className="user-info">
                <span className="user-name">Hi, {loggedInUser.name}</span>
                 <Nav>
            <Nav.Link href='/dashboard' className={`dashbutton nav-link-custom ${activeLink === '/dashboard' ? 'active' : ''}`}
              onClick={() => handleNavClick('/dashboard')}  >
              Dashboard
            </Nav.Link>
          </Nav>
                <Button variant="outline-secondary" onClick={handleLogout} className="ms-2">
                  Logout
                </Button>
              </div>
            ) : (
              <Button href="/login" variant="primary" className="register-btn">
                Login
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EnhancedNavbar;
