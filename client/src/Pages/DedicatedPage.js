import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banenr from '../Components/Banner';
import TotalSummarySec from '../Sections/TotalSummary';
import SimpleTile from '../Components/SimpleTile';
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
                        <BigTile svg={svg1} title="Staff Augmentation" text="Bridge the gap of tech talent demand and supply by taking advantage of our client focussed, best in class staff augmentation services. Hire one or more dedicated software developers from our seasoned pool of resources with the ability to extend and manage your daily tasks as per the changing business demands. With the experience of delivering more than 1800 projects across industries, skill specific recruiting and high client retention rate, encounter IT excellence with HorizonSoft." />
                    </Col>
                    <Col lg={6}>
                        <BigTile svg={svg2} title="Dedicated development team" text="HorizonSoft lets customers concentrate on their core business competencies by giving them the option to hire a dedicated software development team, quality analysts and project manager to keep a track of project plan, sprints and day to day activities. With transparency, seamless reporting, scalable offerings at its core, HorizonSoft's technical mavens identify business loopholes and suggest solutions that benefit clients in the long run. " />
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="why-dedecated-serive-sec">
            <div style={{ textAlign: "center", color: "#fff", marginBottom: "50px" }}>
                <h2>Why Dedicated Development Team</h2>
                <p>Embrace not just the tech-talent and knowledge but also avail a unique perspective on your complicated projects with innovative approach, accessible resources at an affordable cost. HorizonSoft empowers businesses with dedicated software development teams and services.</p>
            </div>
            <Container>
                <Row>
                    <Col lg={6}>
                        <SimpleTile imgURL="/static/icons/faster_resource_accessibility.svg"
                            title="Faster Resource Accessibility"
                            text="Solve your business challenges by teaming up with HorizonSoft for accessible and skilled software developers, architects, team leads and project managers. We use the latest, secure and interactive technologies for day to day resource reporting and status analysis." />
                    </Col>
                    <Col lg={6}>
                        <SimpleTile imgURL="/static/icons/focus_on_core_business.svg"
                            title="Focus on Core business"
                            text="Concurrently manage your core business agendas and software development project targets by building a long-term relationship with TatvaSoft. We develop and manage your software development demands from scratch while you focus on your core business competencies." />
                    </Col>
                    <Col lg={6}>
                        <SimpleTile imgURL="/static/icons/cost_effective_and_flexible_solutions.svg"
                            title="Cost effective & Flexible Solutions"
                            text="Adaptive to changing market needs, HorizonSoft's dedicated development teams of software engineers are open to new learnings. Businesses can ramp up and down resources to adhere to real-time market disruptions and maintain the quality of product with lower cost of investment and higher returns at the same time." />
                    </Col>
                    <Col lg={6}>
                        <SimpleTile imgURL="/static/icons/larger_technology_pool.svg"
                            title="Larger Technology pool"
                            text="HorizonSoft adapts rigorous hiring and training systems to ensure we have competent and best in class resources. Our dedicated software developers are versatile and proficient with modern technologies, tools and methods to quickly meet clients' unique business needs." />
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="section-pad">
            <Container>
                <h4>Key Responibilties</h4>
                <Row>
                    <Col lg={6}>
                        <ul className="mobile-ul">
                            <h5>Horizon Soft</h5>
                            <li>Resource planning, development of team formation</li>
                            <li>Staff motivation and personal development plan</li>
                            <li>HR & best practise delivery processes</li>
                            <li>Development of relevant technical training programs</li>
                            <li>Staff replacement and knowledge transfer</li>
                            <li>Provision of standard office and IT infrastructure</li>
                        </ul>
                    </Col>
                    <Col lg={6}>
                        <ul className="mobile-ul">
                            <h5>Client</h5>
                            <li>End-to-end product ownership, including backlog</li>
                            <li>Overall product roadmap, priorities & strategy, SDLC</li>
                            <li>Acceptance criteria & acceptance process ownership</li>
                            <li>Support for governance framework — feedback and review</li>
                            <li>End-to-end quality & delivery ownership</li>
                        </ul>
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