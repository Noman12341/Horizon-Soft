import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TechCard from '../Components/TechCard';
import img1 from '../Icons/TechSVG/1-1.svg';
import img2 from '../Icons/TechSVG/DevOps.svg'
import img3 from '../Icons/TechSVG/FrontEnd.svg';
import img4 from '../Icons/TechSVG/tech_mobility.svg';
import img5 from '../Icons/TechSVG/tech_others.svg';
import img6 from '../Icons/TechSVG/database.svg';
import img7 from '../Icons/TechSVG/testing.svg';

function TechStack() {
    return <section>
        <div className="section-heading">
            <h2>TOOLS & TECHNOLOGIES WE USE</h2>
            <p>Intellectsoft has grown into an international contestant in enterprise application development services with wide-ranging expertise in all areas needed for reliable software development.</p>
        </div>
        <Container fluid>
            <Row>
                <Col lg={4}>
                    <TechCard imgSrc={img1} title="Backend"
                        list={["Node", "Java", "PHP", "Ruby on Rails", "Laravel"]} />
                    <TechCard imgSrc={img2} title="Cloud & Devops"
                        list={["Amazon Web Services", "Azure", "Google Cloud"]} />
                </Col>
                <Col lg={4}>
                    <TechCard imgSrc={img3} title="Front End"
                        list={["React", "Angular", "Veu"]} />
                    <TechCard imgSrc={img4} title="Mobility"
                        list={["React native", "iOS", "Android", "Flutter"]} />
                    <TechCard imgSrc={img5} title="Others"
                        list={["Share Point", "BizTalk", "Power BI", "Apachi Kafka"]} />
                </Col>
                <Col lg={4}>
                    <TechCard imgSrc={img6} title="Databases"
                        list={["Mongo DB", "My SQL", "PostGre SQL", "SQL Servers", "Dynamo"]} />
                    <TechCard imgSrc={img7} title="Testing"
                        list={["JIRA", "Test Rail", "Postman", "Browser Stack", "OWASAP", "Apachi JMeter"]} />
                </Col>
            </Row>
        </Container>
    </section>
}
export default TechStack;