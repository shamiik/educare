import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="text-center nav-body">
            <NavLink className='menu-style' exact to="/home">Home</NavLink>
            <NavLink className='menu-style' exact to="/teachers">Teachers</NavLink>
            <NavLink className='menu-style' exact to="/courses">Courses</NavLink>
            <NavLink className='menu-style' exact to="/about">About</NavLink>
        </div>
    );
};

export default Navbar;