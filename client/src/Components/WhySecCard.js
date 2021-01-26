import React from 'react';
import { Card, Image } from 'react-bootstrap';
function WhyCard({ img, heading, para }) {
    return <Card className="why-card">
        <div className="mt-4"><Image src={img} height="70" width="70" /></div>
        <Card.Body>
            <h3>{heading}</h3>
            <Card.Text>{para}</Card.Text>
        </Card.Body>
    </Card>
}
export default WhyCard;