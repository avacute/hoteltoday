import React, { Component } from 'react';
import HNAVBAR from '../components/HNavbar';
import {Form, Button} from 'react-bootstrap';
import '../styles/UserManagement.css';
import LOGO from '../images/logo.png';
class ResetPassword extends Component {
    render() {
        return (
            <div>
                <HNAVBAR/>
                    <div className="signin-frame">
                        <div className="signin-form">
                            <div className="logo-frame">
                                <img src={LOGO} alt="logo" className="logo-img"/>
                            </div>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Button variant="success" type="submit" className="signin-button">
                                    Reset Password
                                </Button>

                            </Form>
                        </div>
                    </div>
            </div>
        );
    }
}

export default ResetPassword;