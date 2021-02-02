import React from 'react';
import MainBanner from '../Sections/MainBanner';
import Banner from '../Components/Banner';
import AboutUs from '../Sections/AboutUs';
import Services from '../Sections/Services';
import OurTeam from '../Sections/OurTeam';
import JoinUs from '../Sections/JoinUs';
import ContactUs from '../Sections/ContactUs';
import Reviews from '../Sections/Reviews';
import Tech from '../Sections/Technologies';
// import WhyChoose from '../Sections/WhyHorizon';
function Home() {
    return <div>
        {/* <Banner /> */}
        <MainBanner />
        {/* <WhyChoose /> */}
        <AboutUs />
        <Services />
        <JoinUs />
        <OurTeam />
        <Tech />
        <Reviews />
        <ContactUs />
    </div>
}
export default Home;