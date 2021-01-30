import React, { useEffect, useState } from 'react';
import { Container, Card, Col, Table, Button, Modal, Form, Image } from 'react-bootstrap';
import axios from 'axios';

function AdminServices() {

    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [services, setServices] = useState([]);

    const [formObj, setFormObj] = useState({
        title: "",
        text: ""
    });

    const [img, setImg] = useState(null);

    useEffect(() => {
        const getMembers = async () => {
            await axios.get("/admin/get-services")
                .then(res => {
                    setServices(res.data.services);
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
        setIsLoading(true);
        const form = new FormData();
        form.append('image', img);
        form.append('title', formObj.title);
        form.append('text', formObj.text);
        await axios.post("/admin/add-service", form)
            .then(res => {
                setFormObj({
                    title: "",
                    text: ""
                });
                setImg(null);
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
                <Card.Title>Services Section</Card.Title>
                <Card.Text>This Table shows all the services which are presend in your website</Card.Text>
            </Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Text</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service, i) => {
                            return <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{service.title}</td>
                                <td><Image src={"/static/images/" + service.img} height="70" width="70" /></td>
                                <td>{service.text}</td>
                            </tr>
                        })}

                    </tbody>
                </Table>
            </Card.Body>
        </Card>
        <Card className="mt-4 text-center">
            <Card.Body>
                <Button variant="primary" type="button" onClick={handleShow}>Add Service</Button>
            </Card.Body>
        </Card>
        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Service</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" placeholder="Enter Name" value={formObj.title} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.File label="Example file input" name="image" onChange={handleFile} required />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter Description" rows={3} name="text" value={formObj.text} onChange={handleChange} required />
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" type="submit" disabled={isLoading && true}>Save Changes</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    </Container>
}
export default AdminServices;