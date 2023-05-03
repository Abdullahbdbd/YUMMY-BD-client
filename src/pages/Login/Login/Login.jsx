import React, { useContext, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Google from './Google/Google';
import Github from './Github/Github';

const Login = () => {
    const [error, setError] = useState('')
    const { signIn } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setError('')
                event.target.reset();
            })
            .catch(error => {
                console.error(error.message);
                setError('Your information is Wrong')
            })
    }

    return (
        <div>
            <Header></Header>
            <Container className='w-50 m-5 '>
                <h1 className='mb-4 fw-bold'>Please Login</h1>

                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Form.Text className="text-danger">
                        <p className='fs-5 fw-semibold'>{error}</p>
                    </Form.Text>


                    <Button className='mb-2' variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Don't have an Account? <Link to="/register">Register</Link>
                    </Form.Text>
                </Form>



                <h4 className='mt-4'>Log in With</h4>
                <Google></Google>
                <Github></Github>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;