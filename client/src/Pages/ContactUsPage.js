import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function ContactUsPage() {
    return <main>
        <section className="contact-container">
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        <div className="contact-left-box" style={{ color: "#fff" }}>
                            <h1>Contact Us</h1>
                            <p className="contact-para">Please send us your requirements and we'll get back to you at the earliest.</p>
                            <div className="contact-emails">
                                <h3>Inquiry</h3>
                                <h6>nomanfaisal12341@gmail.com</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Card style={{ borderRadius: "0" }}>
                            <Card.Body style={{ padding: "30px" }}>
                                <h1>Get in Touch</h1>
                                <Form className="card-form">
                                    <Form.Group>
                                        <Form.Control type="name" placeholder="Name" required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="email" placeholder="Email" required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="number" placeholder="Phone Number" required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="country" placeholder="Your Country" required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control as="textarea" name="description" rows={3} placeholder="Description" />
                                    </Form.Group>
                                    <div className="mt-3">
                                        <Button type="Submit" bsPrefix="contact-submit-btn">Submit</Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="section-pad">
            <Container>
                <h1 className="text-center mb-5">Our Global Offices</h1>
                <Row className="text-center">
                    <Col lg={6}>
                        <div style={{ border: "2px solid #eee", padding: "20px" }}>
                            <h3>Pakistan</h3>
                            <div className="footer-contact">
                                <p>Any thing we can write here !</p>
                                <h4><span><FaPhone /></span> +40750866075</h4>
                                <h4><span><FaEnvelope /></span> someOne@gmail.com</h4>
                                <h4><span><FaMapMarkerAlt /></span> House No: DG 752, Street No: 2, Defence Colory KRL Road khana pull rawal pindi</h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div style={{ border: "2px solid #eee", padding: "20px" }}>
                            <h3>Romania</h3>
                            <div className="footer-contact">
                                <p>Any thing we can write here !</p>
                                <h4><span><FaPhone /></span> +40750866075</h4>
                                <h4><span><FaEnvelope /></span> someOne@gmail.com</h4>
                                <h4><span><FaMapMarkerAlt /></span> House No: DG 752, Street No: 2, Defence Colory KRL Road khana pull rawal pindi</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </main>
}
export default ContactUsPage;