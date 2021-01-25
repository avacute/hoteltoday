import React, { Component } from 'react';
import HNAVBAR from '../components/HNavbar';
import {Form, Button} from 'react-bootstrap';
import '../styles/UserManagement.css';
import {connect} from 'react-redux';
import {signUp} from '../state_management/actions/users';
import PropTypes from 'prop-types';
import LOGO from '../images/logo.png';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password:"",
            rPassword:""
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
    render() {
        return (
            <div>
                <HNAVBAR/>
                    <div className="signin-frame">
                        <div className="signin-form">
                            <div className="logo-frame">
                                <img src={LOGO} alt="logo" className="logo-img"/>
                            </div>
                            <Form onSubmit={signUp(this.state.email,this.state.password, this.state.rPassword)}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email"
                                    onChange={this.handleChange}
                                    />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"  name="password" autoComplete="off"
                                     onChange={this.handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPasswordRetype">
                                    <Form.Label>Retype Password</Form.Label>
                                    <Form.Control type="password" placeholder="Retype password" name="rPassword" autoComplete="off"
                                    onChange={this.handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicCheckbox" style={{textAlign:"right"}}>
                                    <span><a href='/signin'>I have an account</a></span>
                                </Form.Group>

                                <Button variant="success" type="submit" className="signin-button">
                                    Submit
                                </Button>
                            </Form>
                        </div>
    
                    </div>
            </div>
        );
    }
}

Register.propTypes = {
    myError: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    
    myError: state.getHotels.merror
});
export default connect(mapStateToProps,signUp)(Register);