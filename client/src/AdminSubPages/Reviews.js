import React, { useEffect, useState } from 'react';
import { Container, Card, Col, Table, Button, Modal, Form, Image } from 'react-bootstrap';
import axios from 'axios';
function AdminReviews() {


    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [formObj, setFormObj] = useState({
        name: "",
        job: "",
        review: "",
        rating: ""
    });
    const [img, setImg] = useState(null);

    useEffect(() => {
        const getMembers = async () => {
            await axios.get("/admin/get-reviews")
                .then(res => {
                    setReviews(res.data.reviews);
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
        form.append('review', formObj.review);
        form.append('rating', formObj.rating);
        await axios.post("/admin/add-review", form)
            .then(res => {
                setFormObj({
                    name: "",
                    job: "",
                    review: "",
                    rating: ""
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
                <Card.Title>Reviews Section</Card.Title>
                <Card.Text>This Table shows all the reviews which are presend in your website</Card.Text>
            </Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Image</th>
                            <th>Review</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((r, i) => (<tr key={i}>
                            <td>{i + 1}</td>
                            <td>{r.name}</td>
                            <td>{r.job}</td>
                            <td><Image src={"/static/images/" + r.img} height="70" width="70" /></td>
                            <td>{r.review}</td>
                            <td>{String(r.rating)}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
        <Card className="mt-4 text-center">
            <Card.Body>
                <Button variant="primary" type="button" onClick={handleShow}>Add Review</Button>
            </Card.Body>
        </Card>
        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Review</Modal.Title>
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
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="number" name="rating" placeholder="Enter rating number" value={formObj.rating} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Review</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter Review" rows={3} name="review" value={formObj.review} onChange={handleChange} required />
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
export default AdminReviews;