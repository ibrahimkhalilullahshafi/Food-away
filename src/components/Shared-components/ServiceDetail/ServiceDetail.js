import React, { useContext } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const ServiceDetail = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);


    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            fullName,
            email,
            message
        }

        fetch('https://a-11-server.vercel.app/reviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('reviewed succssfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error));

    }



    return (
        <div>

            <div className='mt-5'>
                <h1 className='text-center'>Details</h1>
                <div className='d-flex justify-content-center'>
                    <Card className='col-6 bg-transparent'>
                        <Card.Img variant="top" src={service.image} />
                        <Card.Body>
                            <Card.Title className='text-center'>{service.name}</Card.Title>
                            <Card.Text>
                                {service.description}
                            </Card.Text>
                            <p className='text-center fs-5 fw-bold'>Price:{service.price}</p>
                        </Card.Body>
                        <Link to={`/checkout/${service._id}`}><Button className='w-100' variant="danger">Take Away</Button></Link>
                    </Card >
                    <Form onSubmit={handleReview} className="mx-5">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control name="message" as="textarea" rows={3} placeholder="Leave a message" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            review
                        </Button>
                    </Form>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;