import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Services from '../Shared-components/Services/Services';
import photo from '../../poster.jpg';
import pic1 from './Scoot.png'
import pic2 from './Store.png'
import pic3 from './phone.png'


const Home = () => {
    const services = useLoaderData();
    return (
        <div className='container px-0'>
            <div>
                <img className='img-fluid' src={photo} alt="" />
            </div>
            <h1 className='text-center'>Today's menu</h1>

            <div className='d-flex'>
                {services.map(service => <Services
                    key={service._id}
                    service={service}
                ></Services>
                )}
            </div>
            <Link to="/services" className='d-flex justify-content-center text-decoration-none'><Button className='w-10px' variant="danger">See all</Button></Link>
            <div className='d-flex flex-row'>
                <div className='mx-3 my-5 text-center justify-content-evenly'>
                    <img className='img-fluid' src={pic1} alt="" />
                    <h2>Become a hero</h2>
                    <p>As a delivery driver, you'll make money-working anytime.</p>
                </div>
                <div className='mx-3 my-5 text-center justify-content-evenly'>
                    <img className='img-fluid' src={pic2} alt="" />
                    <h2>Become a partner</h2>
                    <p>Grow your business and reach new customers with us.</p>
                </div>
                <div className='mx-3 my-5 text-center justify-content-evenly'>
                    <img className='img-fluid' src={pic3} alt="" />
                    <h2>Try our app</h2>
                    <p>Experience your choices for food,all in one app.</p>
                </div>

            </div>
        </div >
    );
};

export default Home;