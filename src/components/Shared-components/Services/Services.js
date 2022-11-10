import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const Services = ({ service }) => {
    return (
        <Card className='col-md-6 col-lg-4 mb-3 p-0'>
            <PhotoProvider><PhotoView src={service.image}><Card.Img variant="top" src={service.image} /></PhotoView></PhotoProvider>
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
                <Link to={`/services/${service._id}`}><Button className='w-100' variant="danger">Details</Button></Link>
            </Card.Body>
        </Card >
    );
};

export default Services;
