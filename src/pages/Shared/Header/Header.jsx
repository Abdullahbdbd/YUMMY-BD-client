import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand  className='fs-1 fw-bold ' href="#home">YUMMA</Navbar.Brand>
                    <Nav className="me-auto ms-5 fw-bold fs-5">
                        <Nav.Link className='text-black' href="#home">Home</Nav.Link>
                        <Nav.Link className='text-black' href="#features">blog</Nav.Link>
                    </Nav>
                    <button className='p-1 px-4 rounded fs-5 fw-semibold'>Login</button>
                    <img src="" alt="" />
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;