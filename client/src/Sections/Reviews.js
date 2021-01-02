import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewCard from '../Components/ReviewCard';

function Reviews() {
    return <Container id="reviews" fluid>
        <div><span className="sm-span-border"></span><span className="span-border"></span><span>Contact us</span></div>
        <h1 className="services-title mb-5">More Than 800+ Customer<br />Satisfied Our Solutions</h1>
        <Row>
            <Col lg={4}>
                <ReviewCard />
            </Col>
            <Col lg={4}>
                <ReviewCard />
            </Col>
            <Col lg={4}>
                <ReviewCard />
            </Col>
        </Row>
    </Container>
}
export default Reviews;