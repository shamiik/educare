import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const About = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="container">
                <h2 className="text-center"> About Us</h2>
                <p>Our primary focus is on ‘duty of care’, helping to keep children, young people and adults safe from harm. With over 2,000 EduCare courses completed every day, we are the market leader in developing and delivering highly engaging online learning courses in partnership with leading experts.
                    <br />
                    Our complete safeguarding service provides access to high-quality courses as well as robust reporting function which records learner progress and provides evidence to inspectors. Our dedicated customer service team ensure all our customers get the most from their investment – helping customers to improve usage and create bespoke reports.
                    <br />
                    Over 4 million people in a variety of different sectors have learnt how to fulfil their duty of care with EduCare.
                    <br />
                    We have created hundreds of clear, concise courses covering a wide range of sectors. We have worked with education inspectorates, international schools, charities, the ambulance and fire service, the NHS and hundreds of commercial and member organisations to fast track their staff with the real need-to-know essentials.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;