import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewServiceCard from '../Components/NewServiceCard';
import icon1 from '../Icons/ServicesIcons/s-1.svg';
import icon2 from '../Icons/ServicesIcons/s-2.svg';
import icon3 from '../Icons/ServicesIcons/s-3.svg';
import icon4 from '../Icons/ServicesIcons/s-4.svg';
import icon5 from '../Icons/ServicesIcons/s-5.svg';
import icon6 from '../Icons/ServicesIcons/s-6.svg';

function NewServices() {
    return <section id="new-services">
        <div className="text-center">
            <span className="span-border"></span><span className="span-header">What we do</span><span className="span-border"></span>
            <h1 className="services-title">We provide exclusive services<br /> for your business</h1>
        </div>
        <Container>
            <div className="service-tabs">
                <div className="service-tab">Services</div>
            </div>
            <Row>
                <Col lg={4} className="px-0">
                    <NewServiceCard svg={icon1}
                        title="Custom Software Development" path="/custom-dev"
                        text="Create complex enterprise software, ensure reliable software integration, modernise your legacy system." />
                </Col>
                <Col lg={4} className="px-0">
                    <NewServiceCard svg={icon2} path="/mobile-app"
                        title="Mobile App Development "
                        text="Create an impactful mobile app that fits your brand and industry within a shorter time frame." />
                </Col>
                <Col lg={4} className="px-0">
                    <NewServiceCard svg={icon3}
                        title="Dedicated Development Team"
                        text="Hire a loyal software development team with niche skills and deep expertise." />
                </Col>
                <Col lg={4} className="px-0">
                    <NewServiceCard svg={icon4}
                        title="Product Development"
                        text="Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios." />
                </Col>
                <Col lg={4} className="px-0">
                    <NewServiceCard svg={icon5}
                        title="UX / UI Design"
                        text="Build the product you need on time with an experienced team that uses a clear and effective design process." />
                </Col>
                <Col lg={4} className="px-0">
                    <NewServiceCard svg={icon6}
                        title="QA & Testing"
                        text="Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software." />
                </Col>
            </Row>
        </Container>
    </section>
}
export default NewServices;