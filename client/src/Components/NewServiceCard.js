import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NewServiceCard({ svg, title, text, path }) {
    return <Link to={path}>
        <Card id="new-service-card">
            <div className="d-flex">
                <Image src={svg} height="82" />
                <div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Link className="s-card-link" to={path}>Read more</Link>
                </div>
            </div>
        </Card>
    </Link>

}
export default NewServiceCard;