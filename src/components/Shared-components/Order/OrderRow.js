import React from 'react';
import { ListGroup } from 'react-bootstrap';


const OrderRow = ({ order }) => {
    const { serviceName, customer, price, cell } = order;
    return (

        <ListGroup className='my-3'>
            <ListGroup.Item>{serviceName}</ListGroup.Item>
            <ListGroup.Item>{customer}</ListGroup.Item>
            <ListGroup.Item>{price}</ListGroup.Item>
            <ListGroup.Item>{cell}</ListGroup.Item>

        </ListGroup>
    );
};

export default OrderRow;