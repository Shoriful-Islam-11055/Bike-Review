import React from "react";
import { Button, Form } from "react-bootstrap";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-page-title">Contract With Us</h1>
      <section className="form-area">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-4 fw-bold">Email address</Form.Label>
            <Form.Control className="p-2" type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label  className="fs-4 fw-bold">Say Something</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <Button className="btn-lg">Send</Button>
      </section>
    </div>
  );
};

export default About;
