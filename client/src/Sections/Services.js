import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../Components/ServiceCard';
import icon1 from '../Images/icon-01.png';
import icon2 from '../Images/icon-2.png';
import icon3 from '../Images/icon-3.png';
import icon4 from '../Images/icon-4.png';
import icon5 from '../Images/icon-5.png';
import icon6 from '../Images/icon-6.png';

function Services() {
    return <Container id="services" fluid>
        <div><span className="span-border"></span><span>What we do</span><span className="span-border"></span>
            <h1 className="services-title">We provide exclusive services<br /> for your business</h1>
        </div>
        <Container className="p-5" fluid>
            <Row >
                <Col lg={4}>
                    <Card image={icon1} title="Web Development" para="It is a long established fact that a reader will be distracted by the readable content of a page when looking" moveTo="/" />
                </Col>
                <Col lg={4}>
                    <Card image={icon2} title="Database Analysis" para="It is a long established fact that a reader will be distracted by the readable content of a page when looking" moveTo="/" />
                </Col>
                <Col lg={4}>
                    <Card image={icon3} title="Server Security" para="It is a long established fact that a reader will be distracted by the readable content of a page when looking" moveTo="/" />
                </Col>
                <Col lg={4}>
                    <Card image={icon4} title="UX/UI Strategy" para="It is a long established fact that a reader will be distracted by the readable content of a page when looking" moveTo="/" />
                </Col>
                <Col lg={4}>
                    <Card image={icon5} title="Analysis For Tools" para="It is a long established fact that a reader will be distracted by the readable content of a page when looking" moveTo="/" />
                </Col>
                <Col lg={4}>
                    <Card image={icon6} title="Marketing Strategy" para="It is a long established fact that a reader will be distracted by the readable content of a page when looking" moveTo="/" />
                </Col>
            </Row>
        </Container>
    </Container>
}
export default Services;