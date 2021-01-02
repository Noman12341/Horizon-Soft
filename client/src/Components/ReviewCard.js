import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import myImg from '../Images/team-01.jpg';

function ReviewCard() {
    return <Card id="review-card">
        <Card.Body>
            <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Card.Text>
            <div className="client-rating"><FaStar size={20} /><FaStar size={20} /><FaStar size={20} /><FaStar size={20} /></div>
            <div className="d-flex">
                <div><Image className="rounded-circle" src={myImg} height={60} width={60} /></div>
                <div className="ml-4">
                    <h4>Noman Faisal</h4>
                    <span>Web Developer</span>
                </div>
            </div>
        </Card.Body>
    </Card>
}
export default ReviewCard;