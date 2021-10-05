import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            {/*......... This is Home Page ......... */}

            <Banner></Banner>
            <Courses></Courses>
            <Footer></Footer>
        </div>
    );
};

export default Home;