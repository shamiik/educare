import React from 'react';
import Footer from '../Footer/Footer';
import './Course.css'
const Course = (props) => {

    // destructuring
    const { img, duration, name, support, price, lesson } = props.course;
    return (

        // only 4 course data loaded
        <div className='col-md-3'>
            <div className='cart'>
                <div className='photo'>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2>{name}</h2>
                    <small>Total Class: {lesson}</small><br />
                    <small>Duration: {duration}Months</small><br />
                    <small>Support: {support}</small>
                    <p>Price: {price} Tk</p>
                    <button className='btn btn-primary'>Details</button>
                </div>
            </div>
        </div>
    );
};
<Footer></Footer>
export default Course;