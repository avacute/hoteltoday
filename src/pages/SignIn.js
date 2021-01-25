import React, { Component } from 'react';
import HNAVBAR from '../components/HNavbar';
import {Form, Button} from 'react-bootstrap';
import '../styles/UserManagement.css';
import LOGO from '../images/logo.png';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {userAuth} from '../state_management/actions/users';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password:""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    userLogIn = (event) => {
        event.preventDefault();
        this.props.userAuth(this.state);
    }

    render() {
        return (
            <div>
                <HNAVBAR/>
                    <div className="signin-frame">
                        <div className="signin-form">
                            <div className="logo-frame">
                                <img src={LOGO} alt="logo" className="logo-img"/>
                            </div>
                            <Form onSubmit={this.userLogIn} method="post">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange}/>
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"  name="password" onChange={this.handleChange}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicCheckbox" style={{textAlign:"right"}}>
                                    <span><a href='/sandbox/forgot-password'>Forgot Password</a></span><span className="divider">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                    <span><a href='/sandbox/create-account'>Create Account</a></span>
                                </Form.Group>

                                <Button variant="success" type="submit" className="signin-button">
                                    Sign In
                                </Button>

                            </Form>
                        </div>
                    </div>
            </div>
        );
    }
}

SignIn.propTypes = {
    userAuth: PropTypes.func.isRequired
}

export default connect(null,{userAuth})(SignIn);