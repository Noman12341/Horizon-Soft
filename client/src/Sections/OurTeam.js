import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamCard from '../Components/team-card';
import teamMem from '../Images/team-01.jpg';

function OurTeam() {
    return <Container id="our-team" className="px-5" fluid>
        <Row className="mb-5">
            <Col lg="5">
                <span className="sm-span-border"></span>
                <span className="span-border"></span><span>Our Team</span>
                <h1 className="services-title">Meet Experience<br /> Team Member</h1>
            </Col>
        </Row>
        <Row>
            <Col lg={3}>
                <TeamCard image={teamMem} name="Noman Faisal" profection="Web Developer" link1="/" link2="/" link3="/" link4="/" />
            </Col>

        </Row>
    </Container>
}
export default OurTeam;