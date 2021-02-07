import React from 'react';
import TopContainer from '../Components/TopContainer';
import AboutUs from '../Sections/AboutUs';
import NewServices from '../Sections/NewServices';
import OurTeam from '../Sections/OurTeam';
import JoinUs from '../Sections/JoinUs';
import ContactUs from '../Sections/ContactUs';
import Reviews from '../Sections/Reviews';

function AboutPage() {
    return <div>
        <TopContainer bigTitle="About Us" currPage="About" />
        <AboutUs />
        <NewServices />
        <JoinUs />
        <OurTeam />
        <Reviews />
        <ContactUs />
    </div>
}
export default AboutPage;