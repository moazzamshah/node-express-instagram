import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
const SignUp = () => {
  return (
    <Row className='container'>
      <Col>
        <Form onSubmit={() => console.log('Submitted') }>
          <Form.Group controlId='username'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' name='username' />
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' name='email'  />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password' />
          </Form.Group>
          <Button variant='success' type='submit'>
            Sign Up
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default SignUp
