import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight, FaPhone } from 'react-icons/fa';

function JoinUs() {
    return <Container id="join-us" fluid>
        <Row>
            <Col lg={7}>
                <h6>DO YOU HAVE ANY PROJECT ?</h6>
                <h1>Let’s Talk About Business<br />Soluations With Us</h1>
            </Col>
            <Col lg={5} className="my-auto">
                <Link to="/" className="join-us-btn">Join Us <FaLongArrowAltRight /></Link> <Link to="#" className="join-us-no"><FaPhone /> +40750866075</Link>
            </Col>
        </Row>
    </Container>
}
export default JoinUs;