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


    // .......4 data slicing for display home page.........

    const corse = courses.slice(0, 4);
    // console.log(corse);
    return (
        <>
            <div className='course-container'>
                <h2>Our Courses</h2>
                <div>
                    <div className='row'>
                        {
                            corse.map(course => <Course
                                key={course.id}
                                course={course}></Course>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Courses;