import React from 'react';
import TopContainer from '../Components/TopContainer';
import ServicesCollection from '../Sections/Services';
import ContactUs from '../Sections/ContactUs';
function Services() {
    return <div>
        <TopContainer bigTitle="Services" currPage="Services" />
        <ServicesCollection />
        <ContactUs />
    </div>
}
export default Services;