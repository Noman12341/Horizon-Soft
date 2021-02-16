import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import myImg from '../Images/about.png';
function AboutUs() {
    return <Container id="about-us" fluid>
        <Row>
            <Col lg={5}>
                <Image src={myImg} height="450" />
            </Col>
            <Col lg={7}>
                <div><span className="sm-span-border"></span><span className="span-border"></span><span className="blue-sm-hd">Who We Are</span></div>
                <h1 className="services-title">Why Most People Choose<br /> Our Business Solutions</h1>
                <p className="sm-para-about">We are a Consummate Custom Software Development company delivering splendid business IT Solutions and related services to customers across the globe. Our development services are led by our dedicated and passionate team to provide best industry practices combined with technology expertise and business domain knowledge to drive digital transformation. Our proficiency in understanding business challenges and professional competence allows us to create a better experience for our customers.</p>
                <p className="sm-para-about mt-2">We have emerged and marked our presence in different continents by providing Bespoke software development services to all major Industry Domains.</p>
                <div><Link to="/" className="link-mid">Learn More</Link></div>
            </Col>
        </Row>
    </Container>
}
export default AboutUs;