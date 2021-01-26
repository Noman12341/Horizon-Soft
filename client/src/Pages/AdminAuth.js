import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

function AdminAuth() {

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(form);
    }

    return <Container style={{ marginTop: "12%" }}>
        <Card style={{ width: "40%", margin: "0 auto" }}>
            <Card.Body>
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
                        <Button type="submit" variant="primary" block>Login</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    </Container>
}
export default AdminAuth;