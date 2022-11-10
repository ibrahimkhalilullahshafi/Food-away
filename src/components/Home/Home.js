import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Services from '../Shared-components/Services/Services';
import photo from '../../poster.jpg'

const Home = () => {
    const services = useLoaderData();
    return (
        <div className='container px-0'>
            <div>
                <img className='img-fluid' src={photo} alt="" />
            </div>

            <div className='d-flex'>
                {services.map(service => <Services
                    key={service._id}
                    service={service}
                ></Services>
                )}
            </div>
            <Link to="/services" className='d-flex justify-content-center'><Button className='w-10px' variant="primary">See all</Button></Link>
        </div>
    );
};

export default Home;