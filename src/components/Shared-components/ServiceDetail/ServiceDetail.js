import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const service = useLoaderData();

    return (
        <div>

            <div className='mt-5'>
                <div className='d-flex justify-content-center'>
                    <Card className='col-6 bg-transparent'>
                        <Card.Img variant="top" src={service.image} />
                        <Card.Body>
                            <Card.Title className='text-center'>{service.name}</Card.Title>
                            <Card.Text>
                                <p>{service.description}</p>
                                <h3 className='text-center'>Price:{service.price}</h3>
                            </Card.Text>
                        </Card.Body>
                        <Link to={`/checkout/${service._id}`}><Button className='w-100' variant="primary">Take Away</Button></Link>
                    </Card >
                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;