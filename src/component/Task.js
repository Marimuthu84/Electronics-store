import React from "react";
import Container from "react-bootstrap/Container"
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../component/Demo.css";

function Task() {
  return (
    <div className="accord">
      <h2>FAQ's</h2>
      <Container className="faq">
      <Accordion className="myAccordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            1. How long does delivery take?
          </Accordion.Header>
          <Accordion.Body>
            Most orders are delivered within 3–7 business days, depending on your location
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2. Can I return a product?
          </Accordion.Header>
          <Accordion.Body>
           Yes, eligible products can be returned within 7 days of delivery according to our return policy.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            3. Are all products genuine?
          </Accordion.Header>
          <Accordion.Body>
            Absolutely. We sell only authentic products sourced from authorized brands and distributors.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            4. What payment methods do you accept?
          </Accordion.Header>
          <Accordion.Body>
            We accept UPI, credit/debit cards, net banking, and popular digital wallets.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Container>
    </div>
  );
}

export default Task;