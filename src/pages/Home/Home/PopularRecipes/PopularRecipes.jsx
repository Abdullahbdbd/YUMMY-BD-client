import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const PopularRecipes = () => {
    return (
        <Container>
            <h1 className='text-center my-5'>Popular Recipes</h1>
            <hr />
            <div className='d-flex mb-5 gap-5 mt-5'>

                <Card style={{ width: '18rem' }}>
                    <Card.Img className='h-75' variant="top" src="https://www.theflavorbender.com/wp-content/uploads/2018/02/Sri-Lankan-Chicken-Curry-The-Flavor-Bender-Featured-Image-SQ-2.jpg" />
                    <Card.Body>
                        <Card.Title>MAIN DISHES</Card.Title>
                        <h1>Quick Chicken Piccata</h1>
                        <p>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </p>
                        <Card.Text>
                            Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravida tincidunt
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card style={{ width: '18rem' }}>
                    <Card.Img className='h-75' variant="top" src="https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG" />
                    <Card.Body>
                        <Card.Title>MAIN DISHES</Card.Title>
                        <h1>Kung Pao Chicken kari pau</h1>
                        <p>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </p>
                        <Card.Text>
                            Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravida tincidunt
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card style={{ width: '18rem' }}>
                    <Card.Img className='h-75' variant="top" src="https://www.simplyrecipes.com/thmb/TwFcaHtHLSdCtK1ObveCkwpxxsc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2014__09__Classic-Baked-Chicken-LEAD-1-47dc5e85c6e24eb4b54cabb4023a7698.jpg" />
                    <Card.Body>
                        <Card.Title>MAIN DISHES</Card.Title>
                        <h1>Honey-Garlic Slow Cooker Chicken</h1>
                        <p>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </p>
                        <Card.Text>
                            Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravida tincidunt
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card style={{ width: '18rem' }}>
                    <Card.Img className='h-75' variant="top" src="https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-breasts-royalty-free-image-166186033-1537886300.jpg" />
                    <Card.Body>
                        <Card.Title>APPETIZERS AND SNACKS</Card.Title>
                        <h1>Jamie's Baked Brie Cooker Chicken</h1>
                        <p>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </p>
                        <Card.Text>
                            Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravida tincidunt
                        </Card.Text>
                    </Card.Body>
                </Card>




            </div>
        </Container>
    );
};

export default PopularRecipes;