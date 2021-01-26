import React from 'react';
import { Row, Col } from 'react-bootstrap';
import WhyCard from '../Components/WhySecCard';
import prograsive from '../Images/prograssive.png'
import effective from '../Images/effective.png'
function WhySection() {
    return <section id="why-sec">
        <h2>Why Horizon soft</h2>
        <Row>
            <Col lg={3}>
                <WhyCard img={prograsive} heading="Prograsive Road map" para="We are a result-driven software development company that meticulously comprehends details of the client's project and offers the best-fit technology Solution." />
            </Col>
            <Col lg={3}>
                <WhyCard img={effective} heading="Efficient Project Management" para="We endeavour in project risk minimization and take full responsibility for scope, schedule, budget and timeliness in regard to your project." />
            </Col>
            <Col lg={3}>
                <WhyCard img={prograsive} heading="Flexible Engagement Model" para="With a unique amalgamation of skilled developers and cutting-edge technologies, we enable transparency and scalability at all engagement levels." />
            </Col>
            <Col lg={3}>
                <WhyCard img={prograsive} heading="Consistent Delivery" para="We use a plethora of software development techniques such as Scrum, Scrum ban and Scaled Agile Framework, depending on the requirement of the project." />
            </Col>
        </Row>
    </section>
}
export default WhySection;