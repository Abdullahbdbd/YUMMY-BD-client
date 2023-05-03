import React from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <Header></Header>
            <Container className='w-50 m-5 '>
                <h1 className='mb-4 fw-bold'>Please Login</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Button className='mb-2' variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Don't have an Account? <Link to="/register">Register</Link>
                    </Form.Text>

                    <Form.Text className="text-danger">

                    </Form.Text>

                    <Form.Text className="text-success">

                    </Form.Text>
                </Form>

                <h4 className='mt-4'>Log in With</h4>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google </Button>
                <br />
                <Button variant="outline-secondary"><FaGithub></FaGithub> Login with GitHub</Button>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;