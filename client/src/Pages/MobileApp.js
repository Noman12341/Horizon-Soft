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
import ContactUs from '../Sections/ContactUs';
// importing logos or icons
import icon1 from '../Icons/1-1.png';
import icon2 from '../Icons/1-3.png';
import icon3 from '../Icons/1-5.png';
import icon4 from '../Icons/1-6.png';
import icon5 from '../Icons/2-1.png';
import icon6 from '../Icons/2-2.png';
import icon7 from '../Icons/3-1.png';
import icon8 from '../Icons/3-2.png';
import icon9 from '../Icons/3-4.png';
import icon10 from '../Icons/3-5.png';
import icon11 from '../Icons/4-2.png';
import icon12 from '../Icons/4-3.png';
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

    const androidApp = [
        "Android Mobile App Development",
        "Android TV App Development",
        "Android Tablet App Development",
        "Android Wear App Development"
    ]

    const andAppLogos = [
        { icon: icon5, name: "Kotlin" },
        { icon: icon6, name: "Java" },
    ]

    const hybridApp = [
        "Hybrid Mobile App Development",
        "Hybrid Tablet App Development",
        "Hybrid TV App Development"
    ]
    const hybridLogos = [
        { icon: icon7, name: "React" },
        { icon: icon8, name: "Flutter" },
        { icon: icon9, name: "javaScript" },
        { icon: icon10, name: "TypeScript" },
    ]
    const webApp = [
        "Cross-browser Web App Development",
        "Responsive Web App Development",
        "Offline Web App Development"
    ]

    const webLogos = [
        { icon: icon7, name: "React" },
        { icon: icon11, name: "Angular" },
        { icon: icon12, name: "Redux" }
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
                    <MobTecBox title="Android App Development"
                        text="Using the latest technologies, we help businesses establish their presence on any modern device and platform, including:"
                        logos={andAppLogos}
                        points={androidApp} />
                    <MobTecBox title="Cross-platform App Development"
                        text="Get top-notch mobile applications that run on multiple platforms costs while providing your users with an app that fits their OS. Use this alternative to reduce costs and time-to-market and to reach more users without loss of quality, including:"
                        logos={hybridLogos}
                        points={hybridApp} />
                    <MobTecBox title="Progressive Web App Development"
                        text="Build Progressive Web Apps that combine the best technical solutions applied in mobile and web applications beneficial in terms of the ease of development and distribution, as well as a number of other advantages for your business. Talk to our experts to discuss:"
                        logos={webLogos}
                        points={webApp} />
                </div>
            </Container>
        </section>
        <ContactUs />
    </div>
}
export default MobileApp;