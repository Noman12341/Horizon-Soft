import React from 'react';
import { Link } from 'react-router-dom';

function Banner({ smallHeading, bigHeading, text }) {
    return <section id="banner">
        <div className="banner-container">
            <div className="banner-little-heading">{smallHeading}</div>
            <h1 className="banner-title">{bigHeading}</h1>
            <p>{text}</p>
            <div><Link className="banner-link" to="/contact-us">Contact Us</Link></div>
        </div>
    </section>
}
export default Banner;