import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'
const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('../course.json')
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);
    // console.log(courses);
    const corse = courses.slice(0, 4);
    // console.log(corse);
    return (
        <>
            <div className='course-container'>
                <h2>Our Courses</h2>
                <div className='courses'>
                    <div className='row'>
                        {
                            corse.map(course => <Course course={course}></Course>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Courses;