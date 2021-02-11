import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function TechCard({ imgSrc, title, list }) {
    return <Card className="tech-card">
        <Card.Body>
            <h3><span className="mr-3"><Image src={imgSrc} /></span> {title}</h3>
            <ul className="tech-card-ul">
                {list.map((l, i) => {
                    return <li key={i}>{l}</li>
                }
                )}
            </ul>
        </Card.Body>
    </Card>
}
export default TechCard;