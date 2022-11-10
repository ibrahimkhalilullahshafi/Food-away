import React, { useContext } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, name, image, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleOrder = event => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const cell = form.cell.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: name,
            price,
            customer: fullName,
            email,
            cell,
            message
        }

        fetch('https://a-11-server.vercel.app/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('order placed succssfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error));

    }

    return (
        <div>
            <h1 className='text-center'>Checkout Delivery</h1>
            <div>
                <div className='d-flex justify-content-center'>
                    <Card className='col-6 bg-transparent'>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title className='text-center'>{name}</Card.Title>
                            <p className='text-center fs-5 fw-bold'>Price:{price}</p>
                            <Form onSubmit={handleOrder}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control name="fullName" type="text" placeholder="Enter Full Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control name="cell" type="text" placeholder="Enter Phone Number" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Enter email" defaultValue={user?.email} readOnly />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control name="message" as="textarea" rows={3} placeholder="Leave a message" required />
                                </Form.Group>
                                <Button variant="danger" type="submit">
                                    Place Order
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card >
                </div>
            </div>
        </div>
    );
};

export default Checkout;