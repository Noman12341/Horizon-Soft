import React from 'react';
import TopContainer from '../Components/TopContainer';
import NewServices from '../Sections/NewServices';
import ContactUs from '../Sections/ContactUs';
function Services() {
    return <div>
        <TopContainer bigTitle="Services" currPage="Services" />
        <NewServices />
        <ContactUs />
    </div>
}
export default Services;