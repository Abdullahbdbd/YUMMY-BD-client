import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Home from '../pages/Home/Home/Home';
import { Container } from 'react-bootstrap';


const Main = () => {
    return (
        <div>
            <Header></Header>

            <Home></Home>
               
           
            <Container>
            <h2>Main content</h2>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Main;