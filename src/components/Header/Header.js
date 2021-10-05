import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h1 className='fw-bold'>Welcome To EduCare</h1>
            <p><small>High Quality Assurance Centre</small></p>


            {/* .........Navbar call........ */}
            <Navbar></Navbar>
        </div>
    );
};

export default Header;