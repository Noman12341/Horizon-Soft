import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

function TechNameLink({ name, moveTo }) {
    return <Link className="tech-blue-btns" to={moveTo}>{name} <em><FaAngleRight /></em></Link>
}
export default TechNameLink;