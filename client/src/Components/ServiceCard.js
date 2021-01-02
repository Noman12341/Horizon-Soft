import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

function ServiceCard(props) {
    const { image, title, para, moveTo } = props;
    return <Card className="service-card">
        <div><Image src={image} height="78" /></div>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{para}</Card.Text>
            <Link to={moveTo} className="card-link">Read More <FaLongArrowAltRight /></Link>
        </Card.Body>
    </Card>
}
export default ServiceCard;