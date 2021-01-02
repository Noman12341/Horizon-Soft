import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Banner() {
    return <Container id="banner" fluid>
        <Row>
            <Col lg={8} className="banner-padding">
                <h1 className="banner-title">Perfect IT Solutions For Your Business</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit  voluptatem accusantium doloremque</p>
                <div className="mt-5"><Link className="link-mid">Lern More</Link></div>
            </Col>
        </Row>
    </Container>
}
export default Banner;