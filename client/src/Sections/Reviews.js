import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import ReviewCard from '../Components/ReviewCard';
import MySlider from '../Components/MySlider';

function Reviews() {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReviews = async () => {
            await axios.get("/api/main/get-reviews")
                .then(res => {
                    setReviews(res.data.reviews);
                }).catch(error => {
                    console.log("Error in finding reviews.");
                });
        }
        getReviews();
    }, []);

    return <Container id="reviews" fluid>
        <div><span className="sm-span-border"></span><span className="span-border"></span><span>Contact us</span></div>
        <h1 className="services-title mb-5">More Than 800+ Customer<br />Satisfied Our Solutions</h1>
        <MySlider>
            {reviews.map((r, i) => <ReviewCard key={i} name={r.name}
                job={r.job} img={r.img} rating={r.rating} review={r.review}
            />)}
        </MySlider>
    </Container>
}
export default Reviews;