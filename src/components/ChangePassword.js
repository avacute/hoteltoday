import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap';
import '../styles/UserManagement.css';
class ChangePassword extends Component {
    render() {
        return (
            <div>
                    <div className="signin-frame">
                        <div className="signin-form">
                            <Form>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Current Password</Form.Label>
                                    <Form.Control type="password" placeholder=" Current password" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="password" placeholder="New password" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Retype New Password</Form.Label>
                                    <Form.Control type="password" placeholder="Retype new password" />
                                </Form.Group>

                                <Button variant="success" type="submit" className="signin-button">
                                    Change Password
                                </Button>

                            </Form>
                        </div>
                    </div>
            </div>
        );
    }
}

export default ChangePassword;