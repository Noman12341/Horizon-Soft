import React, { useState } from 'react';
import { Container, Row, Col, Image, Form, Button, Spinner } from 'react-bootstrap';
import mapImg from '../Images/contact-us.png';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';

function ContactUs() {

    const [form, setform] = useState({
        name: "",
        email: "",
        subject: "",
        msg: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = e => {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoading(true);
        await axios.post("/admin/send-email", { ...form })
            .then(res => {
                NotificationManager.success('Email send!', 'Success!!');
                setform({
                    name: "",
                    email: "",
                    subject: "",
                    msg: ""
                });
                setIsLoading(false);
            }).catch(error => {
                if (error.response.data.error) {
                    NotificationManager.error('Unable to send the email', 'Error');
                    setIsLoading(false);
                }
            });
    }
    return <Container id="contact-us" fluid>
        <Row>
            <Col lg={7}>
                <div className="contact-sm-hd"><span className="span-border-white"></span><span>Contact us</span></div>
                <h1>Don't Hesitate To<br />Contact Us</h1>
                <Form onSubmit={handleSubmit} style={{ marginRight: "70px" }}>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Name" name="name" onChange={handleChange} value={form.name} required />
                        </Col>
                        <Col>
                            <Form.Control type="email" placeholder="Email" name="email" onChange={handleChange} value={form.email} required />
                        </Col>
                    </Row>
                    <Form.Control type="text" placeholder="Subject" name="subject" onChange={handleChange} value={form.subject} required />
                    <Form.Control as="textarea" type="text" rows={5} placeholder="Message" name="msg" onChange={handleChange} value={form.msg} required />
                    <Button type="submit" bsPrefix="btn-bg-white" disabled={isLoading && true}>{isLoading ? <Spinner animation="border" role="status"></Spinner> : "Send Message"}</Button>
                </Form>
            </Col>
            <Col lg={5}>
                <Image src={mapImg} height="470" />
            </Col>
        </Row>
        <NotificationContainer />
    </Container>
}
export default ContactUs;