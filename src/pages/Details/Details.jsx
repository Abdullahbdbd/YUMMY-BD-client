import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaHandPointRight } from 'react-icons/fa';

const Details = () => {
    const chef = useLoaderData();

    return (
        <Container>
            <div className="card mb-3 mt-5">
                <img src={chef.img_url} className="card-img-top" alt="..." />
                <div className="card-body text-center space-y-2">
                    <h3 className='mt-3'>Name: {chef.name}</h3>
                    <h6>Experience: {chef.experience_years}</h6>
                    <h6>Number of recipes: {chef.num_recipes}</h6>
                    <h6><FaHandPointRight /> {chef.likes}</h6>
                    <p>{chef.bio}</p>
                </div>
            </div>

            <div className='mt-5'>
                <div className="card mb-3" style={{ width: "1000px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={chef.img} className="img-fluid rounded-start h-100" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><span className='fw-bold'>Recipe Name:</span> {chef.rname}</h5>
                                <p className="card-text"><span className='fw-bold'>Ingredients:</span> {chef.ingredients}</p>
                                <p className="card-text"><span className='fw-bold'>Method:</span> {chef.method}</p>
                                <p className="card-text"><span className='fw-bold'>Rating:</span> {chef.rating}</p>
                                <Button className='fw-bold' variant="outline-warning">Favorite</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='mt-5'>
                <div className="card mb-3" style={{ width: "1000px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={chef.img2} className="img-fluid rounded-start h-100" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><span className='fw-bold'>Recipe Name:</span> {chef.rname2}</h5>
                                <p className="card-text"><span className='fw-bold'>Ingredients:</span> {chef.ingredients}</p>
                                <p className="card-text"><span className='fw-bold'>Method:</span> {chef.method}</p>
                                <p className="card-text"><span className='fw-bold'>Rating:</span> {chef.rating}</p>
                                <Button className='fw-bold' variant="outline-warning">Favorite</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='my-5'>
                <div className="card mb-3" style={{ width: "1000px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={chef.img3} className="img-fluid rounded-start h-100" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><span className='fw-bold'>Recipe Name:</span> {chef.rname3}</h5>
                                <p className="card-text"><span className='fw-bold'>Ingredients:</span> {chef.ingredients}</p>
                                <p className="card-text"><span className='fw-bold'>Method:</span> {chef.method}</p>
                                <p className="card-text"><span className='fw-bold'>Rating:</span> {chef.rating}</p>
                                <Button className='fw-bold' variant="outline-warning">Favorite</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default Details;