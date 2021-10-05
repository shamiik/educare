import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Teacher.css'

const Teachers = () => {
    const [teachers, setteachers] = useState([])
    useEffect(() => {
        fetch("./teacher.json")
            .then(res => res.json())
            .then(data => setteachers(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <h2>Our All Courses</h2>
            <div className='row'>
                {
                    teachers.map(teacher => <div
                        key={teacher.id}
                        className='col-md-4'>
                        <div className="cart">
                            <div className='photo'>
                                <img className='w-50' src={teacher.img} alt="" />
                            </div>
                            <div>
                                <h4>{teacher.name}</h4>
                                <p><small>{teacher.email}</small></p>
                                <h2>{teacher.title}</h2>
                                <p>Address:<small> {teacher.address}</small></p>
                            </div>

                        </div>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Teachers;