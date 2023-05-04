import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
        .then(() => {
        })
        .catch(error => console.log(error));
    }


    return (
        <div>
            <Navbar bg="warning" variant="light">
                <Container>
                    <Navbar.Brand className='fs-1 fw-bold' href="#home">YUMMY BD</Navbar.Brand>
                    <Nav className="mx-auto fw-semibold fs-4">
                        <Link className='text-decoration-none text-black me-5' to="/">Home</Link>
                        <Link className='text-decoration-none text-black' to="/blog">Blog</Link>
                    </Nav>
                    {user ?
                        <div>
                            
                            <Button onClick={handleLogOut} className='fw-bold' variant="outline-dark">Log out</Button>
                        </div> :
                        <Link to="/login"><Button className='fw-bold' variant="outline-dark">Login</Button></Link>}
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;