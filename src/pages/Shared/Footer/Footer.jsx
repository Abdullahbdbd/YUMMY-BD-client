import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
                <div className='d-flex justify-content-around bg-warning p-5'>

                    <div>
                        <h1>YUMMY BD</h1>
                        <p>Coming from wide range of hospitality and food service backgrounds,<br /> our Chefs make home cooking easy, healthier and exciting.Coming <br /> from wide range of hospitality and food service backgrounds.</p>
                    </div>

                    <div>
                        <h2>Categories</h2>
                        <li>Breakfast Recipes</li>
                        <li>Lunch Recipes</li>
                        <li>Dinner Recipes</li>
                        <li>Drink Recipes</li>
                        <li>Appetizer & Snack</li>
                        <li>Kitchen Tips</li>
                    </div>

                    <div>
                        <h2>Learn More</h2>
                        <li>About us</li>
                        <li>Team</li>
                        <li>Careers</li>
                        <li>Advertise</li>
                        <li>Content Licensing</li>
                    </div>

                    <div>
                        <h2>Get in connect</h2>
                        <p>Follow us</p>
                        <div className='d-flex justify-content-between mb-4'>
                        <FaFacebookSquare /> 
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube />
                        
                        </div>
                        <Button className='fw-semibold' variant="outline-dark">Connect us</Button>
                    </div>
                </div>

            
        </div>
    );
};

export default Footer;