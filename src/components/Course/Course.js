import React from 'react';
import Footer from '../Footer/Footer';
import './Course.css'
const Course = (props) => {

    const { img, duration, name, support } = props.course;
    return (
        <div className='col-md-3'>
            <div className='cart'>
                <div className='photo'>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2>{name}</h2>
                    <p>Duration: {duration} Months</p>
                    <p>Support: {support}</p>
                    <button className='btn btn-primary'>Details</button>
                </div>
            </div>
        </div>
    );
};
<Footer></Footer>
export default Course;