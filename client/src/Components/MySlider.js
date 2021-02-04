import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

function MySlider(props) {
    let listRef = useRef(null);

    const scrollLeft = () => {
        if (listRef.current) {
            listRef.current.scrollBy({
                top: 0,
                left: 390,
                behavior: 'smooth'
            });
        }
    }
    const scrollRight = () => {
        if (listRef.current) {
            listRef.current.scrollBy({
                top: 0,
                left: -390,
                behavior: 'smooth'
            });
        }
    }
    return <div>
        <div className="slider-main-container" ref={listRef}>
            <div className="slider-container">
                {props.children}
            </div>
        </div>
        <div className="text-center mt-4">
            <Button bsPrefix="arrow-btn" onClick={scrollRight}><FaChevronLeft /></Button>
            <Button bsPrefix="arrow-btn" onClick={scrollLeft}><FaChevronRight /></Button>
        </div>
    </div>
}
export default MySlider;