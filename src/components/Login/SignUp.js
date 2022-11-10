import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';



const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const [accept, setAccept] = useState(false);

    const [error, setError] = useState('');

    const submitHandler = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL)
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    const acceptHandler = event => {
        setAccept(event.target.checked)
    }

    return (
        <div>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="Enter PhotoURL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                        onClick={acceptHandler}
                        label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} >
                    </Form.Check>
                </Form.Group>
                <Button variant="danger" type="submit" disabled={!accept}>
                    Sign Up
                </Button>
                <Form.Group><Form.Text className="text-danger">
                    {error}
                </Form.Text></Form.Group>
                <>Already have an account? <Link to="/login">Login</Link></>
            </Form>
        </div>
    );
};



export default SignUp;