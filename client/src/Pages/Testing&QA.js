import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from '../Components/Banner';
import TotalSummarySec from '../Sections/TotalSummary';
import BigTile from '../Components/BigTiles';
import JoinUs from '../Sections/JoinUs';
import WhyChoose from '../Sections/WhyHorizon';
import ContactUs from '../Sections/ContactUs';
import TechStack from '../Sections/TechStack';
function TestingAndQA() {
    return <main>
        <Banner smallHeading="SOFTWARE TESTING"
            bigHeading="Testing & QA SERVICES"
            text="Our QA services will help you establish concrete control over your product’s life cycle, monitor every development stage, and give you accurate product quality information. For over a decade, our QA experts have been using the latest practices and technologies to ensure efficient performance and high-quality project implementation for the world’s largest enterprises, aiding in delivering solid software on time." />
        <TotalSummarySec />
        <section className="section-pad">
            <div className="section-heading">
                <h2>Testing & QA Services</h2>
                <p>Capitalize on our diversified capabilities of end-to-end product engineering services</p>
            </div>
            <Container>
                <Row>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/functional_testing.svg"
                            title="Functional Testing" text="Validating the software system to conform each functional requirement of the application meets the expected output. Our experienced QA professionals implement functional testing to majorly focus on user interface, database, security, API's, client or server application and similar functionalities of the application." />
                    </Col>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/usability_testing.svg"
                            title="Usability Testing" text="Monitor application behaviour when multiple functions of the application operate concurrently. Our in-depth analysis of user behaviour patterns identifies potential usability issues in the initial phase and create a seamless product." />
                    </Col>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/performance_testing.svg"
                            title="Performance Testing" text="Increasing load time, inefficient responsiveness and instability can be overcome by performance testing. Our profound experience in performance testing by executing quality checks and software behaviour analysis under load and stress guarantees flawless, reliable and smarter applications." />
                    </Col>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/security_testing.svg"
                            title="Security Testing" text="Uncover potential vulnerabilities of your running application by enabling security testing with every release. Our talented pool of test engineers perform risk assessment and penetration testing to shield application from hackers or malicious threats." />
                    </Col>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/compatibility_testing.svg"
                            title="Compatibility Testing" text="Explore the possibilities of compatibility testing with TatvaSoft where an application is tested meticulously across different browsers, databases, hardware, server infrastructures, resolution displays and devices. " />
                    </Col>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/mobile_app_testing.svg"
                            title="Mobile App Testing" text="Scalability, security and multi-platform support are the cornerstones of a mobile app. TatvaSoft provides cross platform, functional/non-functional testing with manual as well as automated approach for diverse mobile applications." />
                    </Col>
                </Row>
            </Container>
        </section>
        <TechStack />
        <JoinUs />
        <WhyChoose />
        <ContactUs />
    </main>
}
export default TestingAndQA;