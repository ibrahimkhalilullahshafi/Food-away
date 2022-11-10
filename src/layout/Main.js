import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Fixed-components/Footer/Footer';
import Header from '../components/Fixed-components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container><Outlet></Outlet></Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;