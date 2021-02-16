import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

function ReviewCard({ name, job, review, rating, img }) {
    return <Card id="review-card">
        <Card.Body>
            <Card.Text>{review}</Card.Text>
            <div className="client-rating">{[...Array(rating)].map((e, i) => <FaStar key={i} size={20} />)}</div>
            <div className="d-flex">
                <div><Image className="rounded-circle" src={"/static/images/" + img} height={60} width={60} /></div>
                <div className="ml-4">
                    <h4>{name}</h4>
                    <span>{job}</span>
                </div>
            </div>
        </Card.Body>
    </Card>
}
export default ReviewCard;