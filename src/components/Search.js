import React, { Component } from 'react';
import '../styles/Search.css';
import {Form, Button, Row, Col} from 'react-bootstrap';
import JCB from '../images/jcb.jpg';
import MAXIMUS from '../images/maximus.jpg';
import PURPLE from '../images/purple.jpg';
import OURHOME from '../images/ourHome.jpg';
import DANICHE from '../images/deniche.png'
class Search extends Component {
    render() {
        return (
            <div>
                <div className='search'>
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
                        <Col sm="4">
                            <a href="/hotel-details">
                                <img src={JCB} alt="jcb hotel" width="100%" height="100%"/>
                                <div className="bookingNow">
                                    <p>AVASyn Hotel ::. Book Now </p>
                                    <span>Ipaja, Lagos</span>
                                
                                </div>
                            </a>
                        </Col>
                        <Col sm="4">
                            <a href="/hotel-details">
                                <img src={OURHOME} alt="jcb hotel" width="100%" height="100%"/>
                                <div className="bookingNow">
                                    <p>AVASyn Hotel ::. Book Now </p>
                                    <span>Ondo, Ondo</span>
                                </div>
                            </a>
                        </Col>
                        <Col sm="4">
                            <a href="/hotel-details">
                                <img src={DANICHE} alt="jcb hotel" width="100%" height="100%"/>
                                <div className="bookingNow">
                                    <p>AVASyn Hotel ::. Book Now </p>
                                    <span>Ikeja, Lagos</span>
                                </div>
                            </a>
                        </Col>
                    </Row>

                    <Row style={{marginTop:"30px"}}>
                        <Col sm="4">
                            <a href="/hotel-details">
                                <img src={PURPLE} alt="jcb hotel" width="100%" height="100%"/>
                                <div className="bookingNow">
                                    <p>AVASyn Hotel ::. Book Now </p>
                                    <span>Yaba, Lagos</span>
                                </div>
                            </a>
                        </Col>
                        <Col sm="4">
                            <a href="/hotel-details">
                                <img src={MAXIMUS} alt="jcb hotel" width="100%" height="100%"/>
                                <div className="bookingNow">
                                    <p>AVASyn Hotel</p>
                                    <span>Kubba, Abuja</span>
                                </div>
                            </a>
                        </Col>
                        <Col sm="4">
                            <a href="/hotel-details">
                                <img src={JCB} alt="jcb hotel" width="100%" height="100%"/>
                                <div className="bookingNow">
                                    <p>AVASyn Hotel ::. Book Now </p>
                                    <span>Warri, Delta</span>
                                </div>
                            </a>
                        </Col>
                    </Row>

                </div>
            </div>
        );
    }
}

export default Search;