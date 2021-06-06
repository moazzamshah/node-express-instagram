import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
const SignIn = () => {
  return (
    <Row className='container'>
      <Col>
        <h2> Sign In </h2>
        <Form>
          <Form.Group controlId='email'>
            <Form.Label>Email:</Form.Label>
            <Form.Control type='email' name='email' />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password' />
          </Form.Group>
          <Button className='my-3' variant='success' type='submit'>
            Local Login
          </Button>
          <Button className='mx-2' variant='primary' type='submit'>
            Facebook Login
          </Button>
          <Button variant='dark' type='submit'>
            Github Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default SignIn
