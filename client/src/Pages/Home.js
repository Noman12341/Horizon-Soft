import React from 'react';
import MainBanner from '../Sections/MainBanner';
import AboutUs from '../Sections/AboutUs';
import OurTeam from '../Sections/OurTeam';
import JoinUs from '../Sections/JoinUs';
import ContactUs from '../Sections/ContactUs';
import Reviews from '../Sections/Reviews';
import Tech from '../Sections/Technologies';
// import WhyChoose from '../Sections/WhyHorizon';
import NewServices from '../Sections/NewServices';

function Home() {
    return <div>
        {/* <Banner /> */}
        <MainBanner />
        {/* <WhyChoose /> */}
        <AboutUs />
        <NewServices />
        <JoinUs />
        <OurTeam />
        <Tech />
        <Reviews />
        <ContactUs />
    </div>
}
export default Home;