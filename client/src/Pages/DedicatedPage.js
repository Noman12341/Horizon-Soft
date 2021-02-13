import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banenr from '../Components/Banner';
import TotalSummarySec from '../Sections/TotalSummary';
import BigTile from '../Components/BigTiles';
import JoinUs from '../Sections/JoinUs';
import TectStack from '../Sections/TechStack';
import WhyChoose from '../Sections/WhyHorizon';
import ContactUs from '../Sections/ContactUs';
import svg1 from '../Icons/DedicatedTeam/dedicated_development_team_new.svg'
import svg2 from '../Icons/DedicatedTeam/staff_augmentation.svg'

function DedicatedPage() {
    return <main>
        <Banenr smallHeading="Dedicated" bigHeading="DEDICATED DEVELOPMENT TEAM"
            text="Scale your delivery capacity with intelligent dedicated developers. Our clients succeed by leveraging Intellectsoft's process of building, motivating, and managing software development teams." />
        <TotalSummarySec />
        <section className="section-pad">
            <div className="section-heading">
                <h2>Dedicated Development Team Services</h2>
                <p>We offer businesses contractual engagement methods with an ability to flex outsourcing as per business needs ensuring higher efficiency and top-notch resources. Our multiple service offerings span across different domains to provide ongoing project support with high-end software development solutions.</p>
            </div>
            <Container>
                <Row>
                    <Col lg={6}>
                        <BigTile svg={svg1} title="Staff Augmentation" text="Bridge the gap of tech talent demand and supply by taking advantage of our client focussed, best in class staff augmentation services. Hire one or more dedicated software developers from our seasoned pool of resources with the ability to extend and manage your daily tasks as per the changing business demands. With the experience of delivering more than 1800 projects across industries, skill specific recruiting and high client retention rate, encounter IT excellence with TatvaSoft." />
                    </Col>
                    <Col lg={6}>
                        <BigTile svg={svg2} title="Dedicated development team" text="TatvaSoft lets customers concentrate on their core business competencies by giving them the option to hire a dedicated software development team, quality analysts and project manager to keep a track of project plan, sprints and day to day activities. With transparency, seamless reporting, scalable offerings at its core, TatvaSoft's technical mavens identify business loopholes and suggest solutions that benefit clients in the long run. " />
                    </Col>
                </Row>
            </Container>
        </section>
        <JoinUs />
        <TectStack />
        <WhyChoose />
        <ContactUs />
    </main>
}
export default DedicatedPage;