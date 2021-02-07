import React from "react";
import { Row, Col, Image } from 'react-bootstrap';

function MobileAppDiv({ title, text, logos, points }) {
    return <div className="mob-tec-box">
        <Row>
            <Col lg={8}>
                <h3 className="mob-tec-title">{title}</h3>
                <p>{text}</p>
                <ul className="mob-tec-logo">
                    {logos.map((l, i) => <li><Image className="d-block" src={l.icon} height="55" /><span>{l.name}</span></li>)}
                </ul>
            </Col>
            <Col lg={4}>
                <ul className="mob-tec-ul">
                    {points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
            </Col>
        </Row>
    </div>
}
export default MobileAppDiv;