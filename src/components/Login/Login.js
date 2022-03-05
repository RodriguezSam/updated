import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Login.css";
import loginIcon from "./loginIcon.png"

const Login = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={4} className="text-center">
            <img className="login-icon" src={loginIcon} alt="icon" />
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary btn-block" type="submit">Login</Button>

          </Form>
          </Col>

          <Col lg={8} md={6} sm={12}>
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default Login;