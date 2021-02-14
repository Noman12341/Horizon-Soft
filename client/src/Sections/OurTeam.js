import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import TeamCard from '../Components/team-card';
import MySlider from '../Components/MySlider';

function OurTeam() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const getMembers = async () => {
            await axios.get("/api/main/get-members")
                .then(res => {
                    setMembers(res.data.members);
                }).catch(error => {
                    console.log("No member is found");
                });
        }
        getMembers();
    }, []);
    return <Container id="our-team" className="px-5" fluid>
        <Row className="mb-5">
            <Col lg="5">
                <span className="sm-span-border"></span>
                <span className="span-border"></span><span>Our Team</span>
                <h1 className="services-title">Meet Experience<br /> Team Member</h1>
            </Col>
        </Row>
        <MySlider>
            {members.map((m, i) => <TeamCard key={i} image={m.img} name={m.name} profection={m.job} link1={m.faceBookLink} link2={m.linkedInLink} link3={m.twitterLink} link4={m.gmailLink} />
            )}
            {/* <TeamCard image={teamMem} name="Noman Faisal" profection="Web Developer" link1="/" link2="/" link3="/" link4="/" />
            <TeamCard image={teamMem} name="Noman Faisal" profection="Web Developer" link1="/" link2="/" link3="/" link4="/" />
            <TeamCard image={teamMem} name="Noman Faisal" profection="Web Developer" link1="/" link2="/" link3="/" link4="/" />
            <TeamCard image={teamMem} name="Noman Faisal" profection="Web Developer" link1="/" link2="/" link3="/" link4="/" /> */}
        </MySlider>
    </Container>
}
export default OurTeam;