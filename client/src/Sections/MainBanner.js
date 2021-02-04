import React, { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import Img1 from '../Images/slider-1.jpg';
import Img2 from '../Images/main-banner-1.jpg';
import Img3 from '../Images/main-banner-2.jpg';
import SVGICon from '../Images/ai.svg';

function MainBanner() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <Image
                className="d-block w-100"
                src={Img1}
                alt="First slide"
            />
            <Image src={SVGICon} height="70" />
            <Carousel.Caption>
                <h3>Dedicated Development Teams </h3>
                <p>Hire top tech talent and quickly scale your delivery capacity. Our engineers have the necessary niche skills, deep expertise, and are highly loyal.</p>
                <Link to="/" className="main-ban-btn">Read More <FaChevronRight /></Link>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image
                className="d-block w-100"
                src={Img2}
                alt="Second slide"
            />

            <Carousel.Caption>
                <h3>Smart Healthcare Solutions</h3>
                <p>Leverage the power of digital solutions to provide more effective treatments and care.</p>
                <Link to="/" className="main-ban-btn">Read More <FaChevronRight /></Link>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image
                className="d-block w-100"
                src={Img3}
                alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Intelligent Insurance</h3>
                <p>A strategic roadmap for insurers to enhance revenue streams, time-to-market, and profitability.</p>
                <Link to="/" className="main-ban-btn">Read More <FaChevronRight /></Link>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
}
export default MainBanner;