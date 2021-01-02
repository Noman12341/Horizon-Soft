import React from 'react';
import Banner from '../Components/Banner';
import AboutUs from '../Sections/AboutUs';
import Services from '../Sections/Services';
import OurTeam from '../Sections/OurTeam';
import JoinUs from '../Sections/JoinUs';
import ContactUs from '../Sections/ContactUs';
import Reviews from '../Sections/Reviews';

function Home() {
    return <div>
        <Banner />
        <AboutUs />
        <Services />
        <JoinUs />
        <OurTeam />
        <Reviews />
        <ContactUs />
    </div>
}
export default Home;