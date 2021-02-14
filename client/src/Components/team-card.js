import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

function TeamCard(props) {
    const { image, name, profection, link1, link2, link3, link4 } = props;
    return <Card className="team-card">
        <div><Image src={"/static/images/" + image} height="274" width="100%" /></div>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{profection}</Card.Text>
            <div className="team-links"><a href={link1}><FaFacebookF /></a><a href={link2}><FaLinkedinIn /></a><a href={link3}><FaTwitter /></a><a href={link4}><FaEnvelope /></a></div>
        </Card.Body>
    </Card>
}
export default TeamCard;