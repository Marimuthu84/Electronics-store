import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../component/Cards.css";

const testimonials = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    text: "This internship helped me improve my React skills a lot!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
  },
  {
    name: "Priya",
    role: "UI Designer",
    text: "Great experience with real-time projects and teamwork.",
    image: "https://plus.unsplash.com/premium_vector-1711987772726-64785d1bade8?w=352&dpr=1&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    name: "Arun",
    role: "Full Stack Developer",
    text: "Mentors were very supportive and helpful.",
    image: "https://media.istockphoto.com/id/1873081935/photo/mature-man-studio-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=yghXGaSJH-NADAsVm4BFiVU_pg35U5p-jp1VajhcmXE=",
  },
];

export default function Testimonial() {
  return (
    <Container className="testimonial">
      
       {testimonials.map((test,index) => (
          <Col key={index}>
            <Card className="t-card">
              <Card.Img className="t-image"
                src={test.image}
              />
              <Card.Body className="t-body">
                <Card.Title className="t-title">
                  {test.name}
                </Card.Title>
                <Card.Subtitle>
                  {test.role}
                </Card.Subtitle>
                <Card.Text>
                  "{test.text}"
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      
    </Container>
  );
}