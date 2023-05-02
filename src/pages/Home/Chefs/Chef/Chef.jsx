import React from 'react';
import { Button } from 'react-bootstrap';
import { FaHandPointRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    return (
        <div className='p-3'>
            <img className='w-75 h-50 rounded' src={chef.img_url} alt="" />
            <h3 className='mt-3'>Name: {chef.name}</h3>
            <p>Experience: {chef.experience_years}</p>
            <p>Number of recipes: {chef.num_recipes}</p>
            <p><FaHandPointRight /> {chef.likes}</p>
            <Link to={`/chef/${chef.id}`}><Button className='fw-semibold' variant="outline-warning"> View Recipes</Button></Link>
        </div>
    );
};

export default Chef;
