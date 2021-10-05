import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h1>Welcome To EduCare</h1>
            <p><small>High Quality Assurance Organization</small></p>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;