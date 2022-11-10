import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (

        <footer className='d-flex justify-content-center align-items-center flex-column my-5'><div className='fs-1'>
            <FaFacebook className='mx-2'></FaFacebook>
            <FaTwitter className='mx-2'></FaTwitter>
            <FaInstagram className='mx-2'></FaInstagram>
            <FaGithub className='mx-2'></FaGithub>
            <FaWhatsapp className='mx-2'></FaWhatsapp></div>
            <div><h6>© 2022 Copyright: MD.Ibrahim.com</h6></div>
        </footer>

    );
};

export default Footer;