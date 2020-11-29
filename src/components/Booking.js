import React, { Component } from 'react';
import '../styles/Booking.css';
import {Form, Button, Row, Col} from 'react-bootstrap';
import JCB from '../images/jcb.jpg';
import MAXIMUS from '../images/maximus.jpg';
import PURPLE from '../images/purple.jpg';
import OURHOME from '../images/ourHome.jpg';
import DANICHE from '../images/deniche.png'
class Booking extends Component {
    render() {
        return (
            <div>
                <div className='booking'>
                    <div className="content">
                        <p>From cozy country homes to funky city apartments</p>
                        <Form>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Col sm="4">
                                    <Form.Control plaintext placeholder="Where are you going ?" className="search-pram"/>
                                </Col>
                                <Col sm="6">
                                    <Form.Control plaintext placeholder="days" className="search-pram"/>
                                </Col>
                                <Col sm="2"> 
                                    <Button variant="success" type="submit" className="search-btn">Search</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                </div>

                <div className="hotels">
                    <Row>
                        <Col sm="4"><img src={JCB} alt="jcb hotel" width="100%" height="100%"/></Col>
                        <Col sm="4"><img src={OURHOME} alt="jcb hotel" width="100%" height="100%"/></Col>
                        <Col sm="4"><img src={DANICHE} alt="jcb hotel" width="100%" height="100%"/></Col>
                    </Row>

                    <Row style={{marginTop:"30px"}}>
                        <Col sm="4"><img src={PURPLE} alt="jcb hotel" width="100%" height="100%"/></Col>
                        <Col sm="4"><img src={MAXIMUS} alt="jcb hotel" width="100%" height="100%"/></Col>
                        <Col sm="4"><img src={JCB} alt="jcb hotel" width="100%" height="100%"/></Col>
                    </Row>

                </div>
            </div>
        );
    }
}

export default Booking;