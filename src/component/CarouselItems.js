import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import iphone from "../images/iphone.jpg";
import Pixel from "../images/pixel.jpg";
import Nothing from "../images/nothing.jpg";
import Samsung from "../images/samsung.jpg";
import Realme from "../images/realme.jpg";
import "./CarouselItems.css";

const phones = [
  { title: "iPhone 16 Pro", price: 100000, image: iphone },
  { title: "Google Pixel", price: 70000, image: Pixel },
  { title: "Nothing Phone", price: 40000, image: Nothing },
  { title: "Samsung Galaxy", price: 65000, image: Samsung },
  { title: "Realme GT", price: 30000, image: Realme },
];

function CarouselExample() {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="heading">Phone Images</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <Carousel
            interval={2000}
            controls={true}
            indicators={true}
            pause="hover"
            variant="dark"
          >
            {phones.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="images"
                  src={item.image}
                  alt={item.title}
                />

                <Carousel.Caption>
                  <div className="caption-box">
                    <h3>{item.title}</h3>
                    <p>₹{item.price.toLocaleString()}</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>

  );
}

export default CarouselExample;