import React, { useEffect, useState } from 'react';
import { Container, Card, Col, Table, Button, Modal, Form, Image } from 'react-bootstrap';
import axios from 'axios';

function AdminMembers() {

    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [members, setMembers] = useState([]);
    const [formObj, setFormObj] = useState({
        name: "",
        job: "",
        faceBookLink: "",
        gmailLink: "",
        linkedInLink: "",
        twitterLink: "",
    });
    const [img, setImg] = useState(null);

    useEffect(() => {
        const getMembers = async () => {
            await axios.get("/admin/get-members")
                .then(res => {
                    setMembers(res.data.members);
                }).catch(error => {
                    throw error;
                });
        }
        getMembers();
    }, []);


    const handleChange = e => {
        setFormObj({ ...formObj, [e.target.name]: e.target.value });
    }
    const handleFile = e => {
        setImg(e.target.files[0]);
    }
    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }
    const handleSubmit = async e => {
        e.preventDefault();
        // setloading
        setIsLoading(true);
        const form = new FormData();
        form.append('name', formObj.name);
        form.append('job', formObj.job);
        form.append('image', img);
        form.append('faceBookLink', formObj.faceBookLink);
        form.append('gmailLink', formObj.gmailLink);
        form.append('linkedInLink', formObj.linkedInLink);
        form.append('twitterLink', formObj.twitterLink);
        await axios.post("/admin/add-member", form)
            .then(res => {
                setFormObj({
                    name: "",
                    job: "",
                    faceBookLink: "",
                    gmailLink: "",
                    linkedInLink: "",
                    twitterLink: "",
                });
                setIsLoading(false);
                setShow(false);
            }).catch(error => {
                setIsLoading(false);
                throw error;
            });
    }
    return <Container>
        <Card className="mt-5">
            <Card.Header>
                <Card.Title>Members Section</Card.Title>
                <Card.Text>This Table shows all the members which are presend in your website</Card.Text>
            </Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member, i) => {
                            return <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{member.name}</td>
                                <td>{member.job}</td>
                                <td><Image src={"/static/images/" + member.img} height="70" width="70" /></td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
        <Card className="mt-4 text-center">
            <Card.Body>
                <Button variant="primary" type="button" onClick={handleShow}>Add New Member</Button>
            </Card.Body>
        </Card>
        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new member</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter Name" value={formObj.name} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Job</Form.Label>
                            <Form.Control type="text" name="job" placeholder="Enter Job" value={formObj.job} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.File label="Example file input" name="image" onChange={handleFile} required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Face Book Address</Form.Label>
                            <Form.Control type="text" name="faceBookLink" placeholder="Enter Face book Link" value={formObj.faceBookLink} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Gmail Address</Form.Label>
                            <Form.Control type="text" name="gmailLink" placeholder="Enter Gmail Link" value={formObj.gmailLink} onChange={handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Linked In Address</Form.Label>
                            <Form.Control type="text" name="linkedInLink" placeholder="Enter Linked In Address" value={formObj.linkedInLink} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Twitter Address</Form.Label>
                            <Form.Control type="text" name="twitterLink" placeholder="Enter Twitter Address" value={formObj.twitterLink} onChange={handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" type="submit" disabled={isLoading && true}>Save Changes</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    </Container>
}
export default AdminMembers;