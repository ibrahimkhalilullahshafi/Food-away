import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Services from '../Shared-components/Services/Services';

const Home = () => {
    const services = useLoaderData();
    return (
        <div className='row'>
            {services.map(service => <Services
                key={service._id}
                service={service}
            ></Services>
            )}
            <Link to="/services"><Button className='w-100' variant="primary">See all</Button></Link>
        </div>
    );
};

export default Home;