import React from 'react';
import Card from 'react-bootstrap/Card';

function Tiles({ svg, title, text }) {
    return <Card className="text-center" style={{ height: "455px", marginBottom: "20px" }}>
        <Card.Img className="mt-4" variant="top" src={svg} height="52" />
        <Card.Body>
            <Card.Title className="tile-title">{title}</Card.Title>
            <Card.Text className="tile-text">{text}</Card.Text>
        </Card.Body>
    </Card>
}
export default Tiles;