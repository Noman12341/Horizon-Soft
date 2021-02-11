import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function TotalSummary() {
    return <section className="summary-sec">
        <Container>
            <p className="summary-dec">The custom software development process encompasses designing, developing, deploying, and maintaining software products and services. As a leading custom software development company, our domain experts explicate the client's views and accordingly draft a strategic approach to optimize each process of the Software development life cycle. Our dynamic team of skilled software developers coupled with industry-driven experience provides a solid foundation to develop agile custom software applications with consistently high-quality results, dedicated QA practices that match specific business needs, budget, and time.</p>
            <Row className="projects-info">
                <Col lg={3} md={6} sm={6}>
                    <div>
                        <span className="pro-info-num">700+</span>
                        <p>Completed Projects</p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                    <div>
                        <span className="pro-info-num">10+</span>
                        <p>Years of experience</p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                    <div>
                        <span className="pro-info-num">300+</span>
                        <p>Global Customers</p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                    <div>
                        <span className="pro-info-num">700+</span>
                        <p>Completed Projects</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}
export default TotalSummary;