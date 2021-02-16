import React from 'react';
import Card from 'react-bootstrap/Card';

function SimpleTile({ imgURL, title, text }) {
    return <Card className="simple-card">
        <Card.Body>
            <Card.Img className="mb-4" variant="top" src={imgURL} height="50" width="50" />
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
        </Card.Body>
    </Card>
}

export default SimpleTile;