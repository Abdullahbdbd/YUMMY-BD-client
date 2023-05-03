import React, { useContext, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const [errors, setErrors] = useState('')
    const { createUser } = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password, photo)

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                setErrors('')
                event.target.reset();
            })
            .catch(error => {
                setErrors('Please enter 6 characters')
            })
    }


    return (
        <div>
            <Header></Header>
            <Container className='w-50 m-5 '>
                <h1 className='mb-4 fw-bold'>Please Register</h1>

                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Enter Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Photo Url</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Your Photo URL" required />
                    </Form.Group>

                    <Form.Text className="text-danger">
                        <p className='fs-5 fw-semibold'>{errors}</p>
                    </Form.Text>


                    <Button className='mb-2' variant="primary" type="submit">
                        Register
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Already have an Account? <Link to="/login">Login</Link>
                    </Form.Text>

                    <Form.Text className="text-danger">

                    </Form.Text>

                    <Form.Text className="text-success">

                    </Form.Text>
                </Form>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Register;