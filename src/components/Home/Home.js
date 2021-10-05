import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
            <Footer></Footer>
        </div>
    );
};

export default Home;