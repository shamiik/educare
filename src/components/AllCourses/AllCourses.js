import React, { useEffect, useState } from 'react';
import './AllCourse.css'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('../course.json')
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2>Our All Courses</h2>
                <div className='row'>
                    {
                        courses.map(course => <div
                            className='col-md-4'>
                            <div className='cart'>
                                <div className='photo'>
                                    <img src={course.img} alt="" />
                                </div>
                                <div>
                                    <h2>{course.name}</h2>
                                    <p>Duration: {course.duration}</p>
                                    <p>Support: {course.support}</p>
                                    <button className='btn btn-primary'>Details</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllCourses;