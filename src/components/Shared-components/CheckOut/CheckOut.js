import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData();
    return (
        <div>
            <p>{service.name}</p>
        </div>
    );
};

export default Checkout;