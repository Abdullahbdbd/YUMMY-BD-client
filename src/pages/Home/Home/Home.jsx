import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
             <div className=' bg-warning'>
                    <div className='d-flex'>
                        <div className='my-auto ms-5'>
                            <h1 className=''>OUR TEAM OF CHEFS</h1>
                            <p>Coming from wide range of hospitality and food service backgrounds,<br /> our Chefs make home cooking easy, healthier and exciting.Coming <br /> from wide range of hospitality and food service backgrounds, our  Chefs make home cooking easy.</p>
                            <Button className='fw-semibold' variant="outline-dark">Get Started</Button>
                        </div>
                        <div>
                            <img className='w-100' src="https://heychef.ae/wp-content/uploads/2022/03/image-PNG-1024x817.png" alt="" />
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Home;