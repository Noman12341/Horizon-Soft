import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AboutUs() {
    return <Container id="about-us" fluid>
        <Row>
            <Col lg={5}>
                <Image height="70" />
            </Col>
            <Col lg={7}>
                <div><span className="sm-span-border"></span><span className="span-border"></span><span className="blue-sm-hd">Who We Are</span></div>
                <h1 className="services-title">Why Most People Choose<br /> Our Business Solutions</h1>
                <p className="sm-para-about">Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo invetore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                <p className="sm-para-about mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</p>
                <div><Link className="link-mid">Learn More</Link></div>
            </Col>
        </Row>
    </Container>
}
export default AboutUs;