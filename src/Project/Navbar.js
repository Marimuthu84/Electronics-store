import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Project/Navbar.css';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Logo from '../images/logo-text.svg';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

function Topbar() {
  const cardCount = 3;
  const handleLogin = () => {
    alert("Login Successfull!");
    closeAllModals();
  };
  const handleRegister = () => {
    alert("Registered Successfull!")
  }
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

 
  const switchToLogin = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  
  const switchToRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };


  const closeAllModals = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  return (
    <>
      <Navbar className="custom-navbar " expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="images" height={50} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav className="links">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/mobile">Mobiles</Nav.Link>
              <Nav.Link as={Link} to="/laptop">Laptops</Nav.Link>
              <Nav.Link as={Link} to="/accessories">Accessories</Nav.Link>
            </Nav>
            <div className="right">
              <div className="search-container">
                <FaSearch className="search-icon" />
                <Form.Control type="search" placeholder="Search products..." />
              </div>

              <Nav className="details">
                <NavDropdown
                  title={<FaUser size={20} />}
                  id="user-dropdown"
                  align="end"
                >
                  <NavDropdown.Item onClick={() => setShowLoginModal(true)}>
                    Login
                  </NavDropdown.Item>

                  <NavDropdown.Item onClick={() => setShowRegisterModal(true)}>
                    Register
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item href="#profile">
                    My Profile
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#cart" className="cart-link">
                  <FaShoppingCart size={22} />
                  <Badge>{cardCount}</Badge>
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showLoginModal} onHide={closeAllModals} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <small className="text-muted me-auto">
            Don't have an account?{' '}
            <Button
              variant="link"
              className="p-0"
              onClick={switchToRegister}
              style={{ textDecoration: 'none' }}
            >
              Register here
            </Button>
          </small>
          <Button variant="secondary" onClick={closeAllModals}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>Login</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showRegisterModal} onHide={closeAllModals} centered>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="I agree to the Terms & Conditions"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <small className="text-muted me-auto">
            Already have an account?{' '}
            <Button
              variant="link"
              className="p-0"
              onClick={switchToLogin}
              style={{ textDecoration: 'none' }}
            >
              Login here
            </Button>
          </small>
          <Button variant="secondary" onClick={closeAllModals}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRegister}>Register</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Topbar;
