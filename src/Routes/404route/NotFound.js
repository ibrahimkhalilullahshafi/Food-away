import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import picture from './error.png'

const NotFound = () => {
    return (
        <div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div><Image src={picture} /></div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h1>PAGE NOT FOUND</h1>
                    <Link to="/"><Button variant="primary">Go to Home</Button></Link>
                </div>
            </div>;

        </div >
    );
};

export default NotFound;