import React from 'react';
import { Button } from 'react-bootstrap';
import { FaHandPointRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const Chef = ({chef}) => {
    return (
        <div className='p-3'>
           
           <LazyLoad height={200} offset={100}>
            <img className='card-img-top img-fluid rounded' loading='lazy' src={chef.img_url} alt="" />
            </LazyLoad>
            <h3 className='mt-3'>Name: {chef.name}</h3>
            <p>Experience: {chef.experience_years}</p>
            <p>Number of recipes: {chef.num_recipes}</p>
            <p><FaHandPointRight /> {chef.likes}</p>
            <Link to={`/chef/${chef.id}`}><Button className='fw-semibold' variant="outline-warning"> View Recipes</Button></Link>
        </div>
    );
};

export default Chef;
