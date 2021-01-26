import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Tech() {
    return <Container id="tech-sec" fluid>
        <h2><span className="span-border-white"></span>Technologies<span className="span-border-white"></span></h2>
        <p>We Digitize your idea. We believe in technology. We save your costs.</p>
        <p>We design and implement advanced custom software solutions and mobile apps to simplify your business
        problems. With our latest technology focus, agile methodology & DevOps combined with cost effective
        digital solutions, you can innovate and optimize your business performance. As a software development company,
we specialize in spectrum of technologies in front-end and back-end.</p>
        <Link to="/tech" className="tech-btn">View All Technologies</Link>
    </Container>
}
export default Tech;