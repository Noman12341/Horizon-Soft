import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Images/horizon-logo.png';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
    return <Container id="footer" fluid>
        <Row>
            <Col lg={3}>
                <Image src={logo} height="70" />
                <p>At vero eoset accusamus et iusto odio dignissimos ducimus qui blpraesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                <div className="footer-social"><a href="#0"><FaFacebookF /></a>
                    <a href="#0"><FaLinkedinIn /></a>
                    <a href="#0"><FaTwitter /></a>
                    <a href="#0"><FaEnvelope /></a>
                </div>
            </Col>
            <Col lg={3}>
                <h4 className="footer-title">Our Services</h4>
                <ul className="footer-menu">
                    <li><Link>User Strategy</Link></li>
                    <li><Link>Product Designs</Link></li>
                    <li><Link>Marketing Strategy</Link></li>
                    <li><Link>IT Consultancy</Link></li>
                    <li><Link>Server Security</Link></li>
                    <li><Link>Product Marketing</Link></li>
                </ul>
            </Col>
            <Col lg={3}>
                <h4 className="footer-title">Quick Links</h4>
                <ul className="footer-menu">
                    <li><Link>About Us</Link></li>
                    <li><Link>Need a Consultant ?</Link></li>
                    <li><Link>Our Services</Link></li>
                    <li><Link>Have any Question ?</Link></li>
                    <li><Link>Meet Our Team</Link></li>
                    <li><Link>Contact Us</Link></li>
                </ul>
            </Col>
            <Col lg={3}>
                <h4 className="footer-title">Contact Us</h4>
                <div className="footer-contact">
                    <p>Any thing we can write here !</p>
                    <h4><span><FaPhone /></span> +40750866075</h4>
                    <h4><span><FaEnvelope /></span> someOne@gmail.com</h4>
                    <h4><span><FaMapMarkerAlt /></span> House No: DG 752, Street No: 2, Defence Colory KRL Road khana pull rawal pindi</h4>
                </div>
            </Col>
        </Row>
    </Container>
}
export default Footer;