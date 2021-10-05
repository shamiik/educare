import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="text-center nav-body">
            <NavLink className='menu-style' to="/home">Home</NavLink>
            <NavLink className='menu-style' to="/teachers">Teachers</NavLink>
            <NavLink className='menu-style' to="/allCourses">Courses</NavLink>
            <NavLink className='menu-style' to="/about">About</NavLink>
        </div>
    );
};

export default Navbar;