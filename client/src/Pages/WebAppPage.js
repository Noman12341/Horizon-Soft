import React from 'react';
import Banner from '../Components/Banner';
import TotalSummarySec from '../Sections/TotalSummary';
import Card from 'react-bootstrap/Card';
import BigTile from '../Components/BigTiles';
import JoinUs from '../Sections/JoinUs';
import WhyChoose from '../Sections/WhyHorizon';
import ContactUs from '../Sections/ContactUs';
import TechStack from '../Sections/TechStack';
import { Col, Container, Row } from 'react-bootstrap';
function WebAppPage() {

    const list = ["Serverless microservices based scalable apps"
        , "Workflow automation and Analytics", "SaaS based product serving multiple customers",
        "Custom business web applications", "Multi service cloud native web applications",
        "Re-engineering legacy Apps with modern frameworks",
        "Portals for document & knowledge management",
        "Integration between various platforms", "Ecommerce and M-Commerce applications",
        "Single page front end development"]
    return <main>
        <Banner smallHeading="Website"
            bigHeading="Web Application Development"
            text="Your custom business ideas demand highly responsive web experience. HorizonSoft's bold approach assists clients right from analysing disruptive B2B or B2C challenges to creating an intuitive UI/UX, fully functional, and powerful web technology solution." />
        <TotalSummarySec />
        <section className="section-pad">
            <div className="section-heading">
                <h2>Web Application Development Services</h2>
                <p>With HorizonSoft, accelerate your pace of web application development to gain competitive advantage</p>
            </div>
            <Container>
                <Row>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/front-end-development.svg"
                            title="Front-endWeb Development" text="Utilize the reusable components and deliver component-driven architecture using React.js, Angular, Vue.js. HorizonSoft is a web application development company that combines the amazing UI designs with required functionalities effortlessly." />
                    </Col>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/back-end-development.svg"
                            title="Back-end development" text="Seamlessly navigate between multiple features of an application by accessing the talented pool of backend web developers who can make your application scalable. We offer AWS and Azure services to host the backend services on cloud, and SQL and NoSQL databases to store and fetch data reliably using Microservices." />
                    </Col>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/saas-applications-development.svg"
                            title="SaaS Application Development" text="Comprehensively delve deep into the client's need to understand the scope of web application and its expandability. Our team of web app developers are adept and backed up by technical soundness to offer secured and multi-tenant SaaS application development solutions benefiting business in the longer run." />
                    </Col>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/progressive-web-apps.svg"
                            title="Progressive Web Apps" text="Aligning to modern needs of app development, we create native apps with enhanced technology features, faster application load times, highly interactive visual content and hassle-free navigation between distinct features within the application." />
                    </Col>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/digital-transformation.svg"
                            title="Digital Transformation" text="Enhance business processes using emerging technologies that provide seamless navigation between multiple cross-platform. Our web developers ensure enterprise agility, automation, security, and integration as per evolving technology needs." />
                    </Col>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/custom-web-application-development-services.svg"
                            title="Custom Web Application Development services" text="We help you deliver superior web development services combined with expert resources, technical prowess to strengthen overall business strategy. Our experience in custom web app development assures compatibility, scalability and consistent user experiences." />
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="why-web-sec">
            <div style={{ textAlign: "center", color: "#fff", marginBottom: "50px" }}>
                <h2>Why Web Development</h2>
                <p>From legacy application modernization to highly scalable microservices, we have developed quality solutions for various industry clients.</p>
            </div>
            <Card style={{ border: "none", borderRadius: "0" }}>
                <Card.Body>
                    <p>We equip businesses with dynamic web apps which are reliant, modular and scalable.</p>
                    <ul className="why-web-ul">
                        {list.map((l, i) => <li key={i}>{l}</li>)}
                    </ul>
                </Card.Body>
            </Card>
        </section>
        <TechStack />
        <JoinUs />
        <WhyChoose />
        <ContactUs />
    </main>
}
export default WebAppPage;