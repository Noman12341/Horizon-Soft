import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TopContainer({ bigTitle, currPage }) {
    return <Container id="bg-split" fluid>
        <h1>{bigTitle}</h1>
        <div className="bg-split-links"><Link className="mr-2" to="/">Home</Link> || <span className="ml-2">{currPage}</span></div>
    </Container>
}
export default TopContainer;