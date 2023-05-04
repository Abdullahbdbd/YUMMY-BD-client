import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Chef from './Chef/Chef';


const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <Container>
            
            <h1 className='text-center my-5'>OUR BD CHEFS </h1>
           <hr />
            <div className='my-5 row row-cols-lg-3'>
                
                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }
            </div>
                 <hr />
        </Container>
    );
};

export default Chefs;