import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AdminAuth() {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState("");

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoading(true);
        await axios.post("/auth/login", { ...form })
            .then(res => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("name", res.data.user.name);
                setIsLoading(false);
                history.push('/admin');
            }).catch(error => {
                setAlert(error.response.data.msg);
                setIsLoading(false);
            });
    }

    return <Container style={{ marginTop: "12%" }}>
        <Card style={{ width: "40%", margin: "0 auto" }}>
            <Card.Body>
                {alert && <Alert variant="danger">{alert}</Alert>}
                <Card.Title className="text-center mb-4">Admin Login</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={form.email} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={form.password} onChange={handleChange} />
                    </Form.Group>
                    <div className="mt-3">
                        <Button type="submit" variant="primary" block disable={isLoading && true}>Login</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    </Container>
}
export default AdminAuth;