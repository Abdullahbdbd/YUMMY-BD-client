import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Blog from '../../Blog/Blog';
import { AuthContext } from '../../../providers/AuthProvider';
import { getAuth, updateProfile } from "firebase/auth";

const Header = () => {
    const [users, setUsers]=useState([])
    const { user } = useContext(AuthContext);
    const auth = getAuth();

    updateProfile(auth.currentUser, {
        displayName: "Jane Q. User", 
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      })
      .then(result => {
       const loggedUser = result.user;
       setUsers(loggedUser)

      })
      .catch((error) => {
        // console.log(error)
      });


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
                            <img src={users.photoURL} alt="" />
                            <Button className='fw-bold' variant="outline-dark">Log out</Button>
                        </div> :
                        <Link to="/login"><Button className='fw-bold' variant="outline-dark">Login</Button></Link>}
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;