import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Review = () => {
    return (
        <Container>
            <hr />
            <h1 className='text-center my-5'>Customer Review</h1>
            <hr />
            <div className='d-lg-flex my-5 gap-5 ms-4'>

                <Card className='p-3 align-items-center mt-5' style={{ width: '18rem' }}>
                    <Card.Img className='rounded-circle w-50 h-50' variant="top" src="https://img.freepik.com/free-photo/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background_1258-65597.jpg" />
                    <Card.Body>
                        
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <h3 className='text-center'>Student</h3>
                        
                    </Card.Body>
                </Card>


                <Card className='p-3 align-items-center mt-5' style={{ width: '18rem' }}>
                    <Card.Img className='rounded-circle w-50 h-50' variant="top" src="https://img.freepik.com/free-photo/young-asian-girl-with-notebook-coffee-go-hands-standing-isolated-against-gray-background_231208-2172.jpg?q=10&h=200" />
                    <Card.Body>
                        
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <h3 className='text-center'>Student</h3>
                        
                    </Card.Body>
                </Card>


                <Card className='p-3 align-items-center mt-5' style={{ width: '18rem' }}>
                    <Card.Img className='rounded-circle w-50 h-50' variant="top" src="https://www.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg" />
                    <Card.Body>
                        
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <h3 className='text-center'>Student</h3>
                        
                    </Card.Body>
                </Card>


                <Card className='p-3 align-items-center mt-5' style={{ width: '18rem' }}>
                    <Card.Img className='rounded-circle w-50 h-50' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0kuzY3f4nqglDUO0qz1Ib2g4rEpZSrpy4w&usqp=CAU" />
                    <Card.Body>
                        
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <h3 className='text-center'>Student</h3>
                        
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default Review;