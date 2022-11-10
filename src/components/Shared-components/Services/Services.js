import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    return (
        <Card className='col-md-6 col-lg-4 mb-3 gx-4'>
            <Card.Img variant="top" src={service.image} />
            <Card.Body>
                <Card.Title className='text-center'>{service.name}</Card.Title>
                <Card.Text>
                    {service.description.length > 250 ?
                        <>{service.description.slice(0, 100) + '...'}<Link to={`/service/${service._id}`}>More</Link>
                        </>
                        :
                        <>{service.description}</>
                    }
                </Card.Text>
                <Link to={`/service`}><Button className='w-100' variant="primary">Details</Button></Link>
            </Card.Body>
        </Card >
    );
};

export default Services;
