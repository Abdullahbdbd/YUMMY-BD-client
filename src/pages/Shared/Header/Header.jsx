import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="warning" variant="light">
                <Container>
                    <Navbar.Brand  className='fs-1 fw-bold' href="#home">YUMMY BD</Navbar.Brand>
                    <Nav className="mx-auto fw-semibold fs-4">
                        <Nav.Link className='text-black' href="#home">Home</Nav.Link>
                        <Nav.Link className='text-black' href="#features">blog</Nav.Link>                   
                    </Nav>
                    <img src="" alt="" />
                    <Button className='fw-bold' variant="outline-dark">Login</Button>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;