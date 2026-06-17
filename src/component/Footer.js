import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { BsWhatsapp } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/logo-text.svg";
import "../component/Footer.css";


function Footer() {
  return (
    <footer className="footer pt-5">

      <Container>
        <Row>

      
          <Col md={6} className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="logo" width="200" height="80" />
            </div>

            <p style={{ maxWidth: "300px" }}>
              Your Trusted Destination for Mobiles, Laptops & Accessories. <BsWhatsapp />
            </p>
          </Col>
          <Col md={3} className="mb-3">
            <h6 className="fw-bold">Explore</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-blk text-decoration-none">Home</Link></li>
              <li><Link to="/mobile" className="text-blk text-decoration-none">Mobiles</Link></li>
              <li><Link to="/laptop" className="text-blk text-decoration-none">Laptops</Link></li>
              <li><Link to="/accessories" className="text-blk text-decoration-none">Accessories</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="fw-bold">Help</h6>
            <ul className="list-unstyled">
              <li><a href="#contact" className="text-blk text-decoration-none">Contact</a></li>
              <li><a href="#terms" className="text-blk text-decoration-none">Terms</a></li>
              <li><a href="#cookies" className="text-blk text-decoration-none">Cookies</a></li>
              <li><a href="#privacy" className="text-blk text-decoration-none">Privacy</a></li>
            </ul>
          </Col>

        </Row>

        <hr className="border-secondary" />
        <Row className="align-items-center pb-3">

          <Col md={6} className="fw-bold">
            <small>© Tech Hub Store. All Rights Reserved.</small>
          </Col>

          <Col md={6} className="text-md-end mt-3 mt-md-0">

           <a href="#facebook" className="facebook me-3">
                <FaFacebookF size={20}/>
           </a>

           <a href="#instagram" className="instagram">
            <FaInstagram size={20} />
           </a>
          </Col>

        </Row>
      </Container>

    </footer>
  );
};

export default Footer;
