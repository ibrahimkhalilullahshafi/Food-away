import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FcBusinessman } from "react-icons/fc";
import logo from "./appLogo.png";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (

        <Navbar className='container' collapseOnSelect expand="lg" bg="danger" variant="light">
            <Container>

                <Navbar.Brand><Link to={'/'} className="text-white text-decoration-none fs-2 fw-bold"><img
                    alt=""
                    src={logo}
                    width="45"
                    height="45"
                    className="d-inline-block align-top"
                />{' '} FOOD AWAY</Link ></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav>
                            <Nav className="me-auto">
                                <Nav><Link to='/blog' className="text-decoration-none fw-semibold fs-3 text-white">BLOG</Link></Nav>
                            </Nav>
                            <Nav className="me-auto">
                                <Nav><Link to='/orders' className="text-decoration-none fw-semibold fs-3 text-white mx-3">ORDER</Link></Nav>
                            </Nav>
                            {
                                user?.uid ?
                                    <><span className='ms-2 mt-2'>{user?.displayName}</span>
                                        <Button onClick={handleLogOut} variant="secondary" className='ms-2 mb-3'>Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to="/login" className="text-decoration-none ms-2"><Button variant="secondary">Login</Button></Link>
                                        <Link to="/signup" className="text-decoration-none ms-2"><Button variant="secondary">Sign Up</Button></Link>
                                    </>
                            }
                        </Nav>
                        <Nav.Link eventKey={2} href="">
                            {user?.photoURL ?
                                <Image style={{ height: '30px' }} roundedCircle
                                    src={user?.photoURL}></Image> : <FcBusinessman className='fs-2'></FcBusinessman>}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;