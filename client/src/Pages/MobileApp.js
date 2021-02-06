import React from 'react';
import Banner from '../Components/Banner';
import { Container, Row, Col, Image } from 'react-bootstrap';
import MobileImg from '../Images/mobile-600.png';
import MobileCard from '../Components/MobileCard';
import svg1 from '../Images/native-mobile.svg';
import HybridMobile from '../Images/Hybrid-mobile.svg'
import PrograssiveWeb from '../Images/prograssiveWeb.svg';
import Wearable from '../Images/Wearable.svg';
import MobTecBox from '../Components/MobileTechDiv';
// importing logos or icons
import icon1 from '../Icons/1-1.png';
import icon2 from '../Icons/1-3.png';
import icon3 from '../Icons/1-5.png';
import icon4 from '../Icons/1-6.png';
function MobileApp() {

    const isoDev = [
        "iPhone App Development",
        "iPad App Development",
        "Apple Watch App Development",
        "Apple TV App Development",
        "App Clips Development"
    ]
    const isoLogos = [
        { icon: icon1, name: "swift" },
        { icon: icon2, name: "SwiftUI" },
        { icon: icon3, name: "RxSwift" },
        { icon: icon4, name: "SwiftLint" }
    ]
    return <div>
        <Banner />
        <section className="mobile-heading">
            <Container>
                <div>
                    <h2>OUR HIGH-END MOBILE APP DEVELOPMENT SERVICES</h2>
                    <p>We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.</p>
                </div>
                <Row>
                    <Col>
                        <ul className="mobile-ul">
                            <li>Custom iOS and Android apps development</li>
                            <li>Native and cross-platform solutions</li>
                            <li>Second platform app development</li>
                            <li>UI/UX design</li>
                            <li>Consulting and prototyping</li>
                            <li>Automated QA and testing</li>
                            <li>Power management, notification and geofencing</li>
                            <li>Embedded Android & AOSP customizations</li>
                            <li>Maintenance and post-warranty support</li>
                        </ul>
                    </Col>
                    <Col>
                        <div>
                            <Image src={MobileImg} alt="Mobile Image here" height="600" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section id="mobile-details">
            <Container>
                <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                    <h2>MOBILE APPLICATION DEVELOPMENT SERVICES FOR VARIOUS PLATFORMS</h2>
                    <p>Our mobile app developers have over a decade-long expertise in building solutions that meet market needs, empower companies’ brand identity, and encourage business growth and expansion.</p>
                </div>
                <Row>
                    <Col lg={3}>
                        <MobileCard svg={svg1} title="Native Mobile App Development" text="Our mobile app developers can build high-quality native apps for both Android and iOS systems aligned with your business and security requirements." />
                    </Col>
                    <Col lg={3}>
                        <MobileCard svg={HybridMobile} title="Hybrid Mobile App Development" text="Cross-platform apps that can work in different environments thanks to a unique blend of native and web app technologies." />
                    </Col>
                    <Col lg={3}>
                        <MobileCard svg={PrograssiveWeb} title="Progressive Web App Development" text="With Progressive Web Apps, we deliver native-like capabilities and installability while reaching anyone, anywhere, on any device with a single codebase." />
                    </Col>
                    <Col lg={3}>
                        <MobileCard svg={Wearable} title="Wearables and Embedded Software" text="We can create companion apps for a number of wearable devices, integrate with smart devices or proprietary peripherals." />
                    </Col>
                </Row>
            </Container>
        </section>
        <section id="mobile-tech">
            <Container>
                <div className="center-heading">
                    <h2>OUR EXPERTISE WITH MAJOR MOBILE APP DEVELOPMENT TECHNOLOGIES</h2>
                    <p>Delight your users with expressive and feature-rich native iOS / Android, cross-platform or Progressive Web Apps leveraging our extensive experience of working with all major technologies.</p>
                </div>
                <div>
                    <MobTecBox title="iOS App Development"
                        text="We have all the expertise you need to produce fully-fledged, stable, and scalable mobile applications, including:"
                        logos={isoLogos}
                        points={isoDev} />
                </div>
            </Container>
        </section>
    </div>
}
export default MobileApp;