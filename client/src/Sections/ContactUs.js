import React from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import mapImg from '../Images/contact-us.png';

function ContactUs() {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return <Container id="contact-us" fluid>
        <Row>
            <Col lg={7}>
                <div className="contact-sm-hd"><span className="span-border-white"></span><span>Contact us</span></div>
                <h1>Don't Hesitate To<br />Contact Us</h1>
                <Form onSubmit={handleSubmit} style={{ marginRight: "70px" }}>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Name" required />
                        </Col>
                        <Col>
                            <Form.Control type="email" placeholder="Email" required />
                        </Col>
                    </Row>
                    <Form.Control type="text" placeholder="Subject" required />
                    <Form.Control as="textarea" type="text" rows={5} placeholder="Message" required />
                    <Button type="submit" bsPrefix="btn-bg-white">Send Message</Button>
                </Form>
            </Col>
            <Col lg={5}>
                <Image src={mapImg} height="470" />
            </Col>
        </Row>
    </Container>
}
export default ContactUs;