import React from 'react';
import { Card, Image } from 'react-bootstrap';

function MobileCard({ svg, title, text }) {
    return <Card className="mobile-card">
        <Card.Body className="p-0">
            <Image className="mb-4" src={svg} />
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
        </Card.Body>
    </Card>
}
export default MobileCard;