import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

function ContactUsPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phoneNo: "",
        country: "",
        description: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState({
        msg: "",
        type: ""
    });
    const handleChange = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const handleSubmit = async event => {
        event.preventDefault();
        setIsLoading(true);
        await axios.post("/api/main/send-email", { ...form })
            .then(() => {
                setAlert({ msg: "Your Email has been sent.", type: "success" });
                setIsLoading(false);
            }).catch(() => {
                setAlert({ msg: "Sorry! Unable to send email.", type: "danger" })
                setIsLoading(false);
            });
    }

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
                                {alert.msg && <Alert variant={alert.type} onClose={() => setAlert({ msg: "", type: "" })} dismissible>{alert.msg}</Alert>}
                                <h1>Get in Touch</h1>
                                <Form className="card-form" onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <Form.Control type="name" placeholder="Name" name="name" value={form.name} onChange={handleChange} required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="email" placeholder="Email" name="email" value={form.email} onChange={handleChange} required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="number" placeholder="Phone Number" name="phoneNo" value={form.phoneNo} onChange={handleChange} required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="country" placeholder="Your Country" name="country" value={form.country} onChange={handleChange} required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control as="textarea" name="description" rows={3} placeholder="Description" value={form.description} onChange={handleChange} required />
                                    </Form.Group>
                                    <div className="mt-3">
                                        <Button type="Submit" bsPrefix="contact-submit-btn" disabled={isLoading}>Submit</Button>
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
                                <p>Main Branch of HorzonSoft</p>
                                <h4><span><FaPhone /></span> +92 3495060721</h4>
                                <h4><span><FaEnvelope /></span> mfaisal902@gmail.com</h4>
                                <h4><span><FaMapMarkerAlt /></span> House No: DG 752, Street No: 2, Defence Colory KRL Road khana pull rawal pindi</h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div style={{ border: "2px solid #eee", padding: "20px" }}>
                            <h3>Romania</h3>
                            <div className="footer-contact">
                                <p>Sub branch of HorizonSoft</p>
                                <h4><span><FaPhone /></span> +40750866075</h4>
                                <h4><span><FaEnvelope /></span> mfaisal902@gmail.com</h4>
                                <h4><span><FaMapMarkerAlt /></span> Bucuresti Spi, Indepenentei, Nr .290 BL .P27  AP .135 S. 6 DREPT DE MUNCA</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </main>
}
export default ContactUsPage;