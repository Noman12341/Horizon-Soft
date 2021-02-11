import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Banner from '../Components/Banner';
import TotalSummarySec from '../Sections/TotalSummary';
import JoinUs from '../Sections/JoinUs';
import TectStack from '../Sections/TechStack';
import WhyChoose from '../Sections/WhyHorizon';
import ContactUs from '../Sections/ContactUs';
import Tile from '../Components/BigTiles';
import icon1 from '../Icons/Tiles-SVG/1-1.svg';
import icon2 from '../Icons/Tiles-SVG/1-2.svg';
import icon3 from '../Icons/Tiles-SVG/1-3.svg';
import icon4 from '../Icons/Tiles-SVG/1-4.svg';
import icon5 from '../Icons/Tiles-SVG/1-5.svg';
import icon6 from '../Icons/Tiles-SVG/1-6.svg';
import gif from '../Images/Gifs/dev-life-cycle.gif';

function CustomSoftDev() {
    return <main>
        <Banner smallHeading="Custom"
            bigHeading="CUSTOM SOFTWARE DEVELOPMENT"
            text="Leverage our 13-year expertise in enterprise software development, API integration, modernising legacy systems, and consolidating app portfolios. We help large organizations become a lasting success in the global arena by re-engineering solutions of different complexity." />
        <TotalSummarySec />
        <section className="section-pad">
            <div className="text-center mb-5">
                <h2>Custom Software development</h2>
                <p>Our tailor-made software suit comprehensively offers services to multiple businesses</p>
            </div>
            <Container fluid>
                <Row>
                    <Col lg={4}>
                        <Tile svg={icon1} title="Bespoke Software Development"
                            text="Superior custom software development services combined with expert resources, technical prowess to strengthen overall business strategy. Our prototyping approach and robust development plan create custom applications from scratch across mobile, web, and cloud platforms ensuring seamless integration, flexibility, and business profitability." />
                    </Col>
                    <Col lg={4}>
                        <Tile svg={icon2} title="Application Migration and reengineering"
                            text="Modernize legacy applications and boost performance by redesigning, refactoring, or migration facilities to fully customized functionally-rich applications. We ensure smooth and flawless re-engineering of software with advanced enhancements of new features, improved UI/UX, and modern security-based on cutting-edge technologies." />
                    </Col>
                    <Col lg={4}>
                        <Tile svg={icon3} title="Software Application maintenance"
                            text="Explore the maximum potential of your software by fine-tuning it with regular software upgrades. Our custom software development services enable you to transparently manage all the post-development activities with periodic software updates and real-time issue resolution ensuring high-performing apps at ease." />
                    </Col>
                    <Col lg={4}>
                        <Tile svg={icon4} title="SaaS Applications"
                            text="Leverage our multi-year experience in building commercial SaaS-based applications to address your specific business challenges and achieve higher productivity, minimum risks, and elevated customer experience." />
                    </Col>
                    <Col lg={4}>
                        <Tile svg={icon5} title="Application Integration"
                            text="End-to-end application integration services to optimize workflow between disparate business sources that hinders business progress. We offer state of the art integration services between on-premise cloud or offline data environments with customization to ensure smoother and flexible business operations." />
                    </Col>
                    <Col lg={4}>
                        <Tile svg={icon6} title="Maintenance and Support"
                            text="Upscale application performance by making transformational changes as a part of software upgrade and maintenance tailored to specific customer needs. We facilitate clients with custom software application support at different levels from infrastructural changes, operation system integration change, web services support, cloud support SLA violation, or contract breach support for seamless business continuity." />
                    </Col>
                </Row>
            </Container>
        </section>
        <JoinUs />
        <section className="section-pad">
            <Container>
                <div className="section-heading">
                    <h2>SOFTWARE DEVELOPMENT LIFECYCLE</h2>
                    <p>We employ best practices and development methodologies for building effective enterprise software development process and solutions in a structured and systematic way.</p>
                </div>
                <Row>
                    <Col lg={6}>
                        <ul className="mobile-ul">
                            <li>Planning</li>
                            <li>Designing</li>
                            <li>Defining</li>
                            <li>Building</li>
                            <li>Testing</li>
                            <li>Deploment</li>
                            <li>Maintinace</li>
                        </ul>
                    </Col>
                    <Col lg={6}>
                        <Image src={gif} alt="Image here" style={{ maxWidth: "466px" }} />
                    </Col>
                </Row>
            </Container>
        </section>
        <TectStack />
        <WhyChoose />
        <ContactUs />
    </main>
}
export default CustomSoftDev;