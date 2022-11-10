import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const AllServices = () => {
    const services = useLoaderData();
    return (
        <div className='container'>
            <div className='row'>
                {services.map(service =>
                    <Card className='col-md-6 col-lg-4 mb-3 p-0' key={service._id}>
                        <PhotoProvider><PhotoView key={service._id} src={service.image}><Card.Img variant="top" src={service.image} /></PhotoView></PhotoProvider>
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
                            <Link to={`/services/${service._id}`}><Button className='w-100' variant="primary">Details</Button></Link>
                        </Card.Body>
                    </Card >
                )}
            </div>
        </div>
    );
};

export default AllServices;