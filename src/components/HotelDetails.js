import React, { Component } from 'react';
import '../styles/HotelDetails.css';
import LOGO from '../images/logo.png';
import {Form, Row, Col, Button} from 'react-bootstrap';
import { DateRangePicker} from 'rsuite';
class HotelDetails extends Component {
    render() {
        const style = {borderRadius: "4px", border: "solid 1px", borderColor: "#cdcfce", padding: "3px 5px", boxSizing: "border-box", margin: "8px 0"};
        return (
            <div>
                <div className="hotel-details">
                    <Row>
                        <Col sm="6" className="hotel-header">
                            <Row>
                                <Col sm="9">
                                    <img src={LOGO} alt="text logo"/>
                                </Col>
                                <Col sm="3"> 
                                    Rating: 8.0
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="6" className="booking-info">
                                <p><b>Book rooms in AVASyn Hotel, Ipaja online</b></p>
                                <Form>
                                    <Form.Group  controlId="formPlaintextEmail">
                                        <Row>
                                            <Col sm="6">
                                                <DateRangePicker    
                                                    appearance="subtle"
                                                    size="lg"    
                                                    showOneCalendar 
                                                    style = {style} 
                                                />
                                            </Col>
                                            <Col sm="3">
                                                <Form.Control plaintext placeholder="Adult" className="hotel-details-pram"/>
                                            </Col>
                        
                                            <Col sm="3">
                                                <Form.Control plaintext placeholder="Rooms" className="hotel-details-pram"/>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col sm="4">
                                                <Form.Control plaintext placeholder="Phone Number" className="hotel-details-pram"/>
                                            </Col>
                                            <Col sm="4">
                                                <Form.Control plaintext placeholder="Select Suit" className="hotel-details-pram"/>
                                            </Col>
                                            <Col sm="4"> 
                                                <Button variant="success" type="submit" className="hotel-details-btn">Search</Button>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Form>
                        </Col>
                    </Row>
                    <div className="hotel-more">

                    </div>
                </div>
            </div>
        );
    }
}

export default HotelDetails;