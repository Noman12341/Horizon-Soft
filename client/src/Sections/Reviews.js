import React from 'react';
import { Container } from 'react-bootstrap';
import ReviewCard from '../Components/ReviewCard';
import MySlider from '../Components/MySlider';

function Reviews() {

    return <Container id="reviews" fluid>
        <div><span className="sm-span-border"></span><span className="span-border"></span><span>Contact us</span></div>
        <h1 className="services-title mb-5">More Than 800+ Customer<br />Satisfied Our Solutions</h1>
        <MySlider>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
        </MySlider>
    </Container>
}
export default Reviews;