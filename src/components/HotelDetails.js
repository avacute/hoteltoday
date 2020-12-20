import React, { Component } from 'react';
import '../styles/HotelDetails.css';
import {Form, Row, Col, Button} from 'react-bootstrap';
import { DateRangePicker} from 'rsuite';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getHotelsByID,getSuiteByHotelID} from '../state_management/actions/hotels';

class HotelDetails extends Component {
    componentDidMount(){
        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);
        this.props.getHotelsByID(id);
        this.props.getSuiteByHotelID(id);
    }
   
    render() {
        const searchError = <div>{this.props.myError}</div>;
    
        const style = {borderRadius: "4px", border: "solid 1px", borderColor: "#cdcfce", padding: "3px 5px", boxSizing: "border-box", margin: "8px 0"};
        return (
            <div>
                <div className="hotel-details">
                    <div className='error'>{searchError}</div>
                    <Row style={{margin:"auto"}}>
                        <Col sm="6" >
                            <div className="hotel-header">
                                <Row>
                                    <Col sm="9">
                                        <div>
                                            <p className="hotel-name">{this.props.hotels.hotel_name}</p>
                                            <span className="hotel-name-span">{this.props.hotels.hotel_location}</span>
                                        </div>
                                    </Col>

                                    <Col sm="3"> 
                                    <p className="hotel-name" > Rating: {this.props.hotels.hotel_rating} </p> 
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col>
                                        <div>
                                        <p className="hotel-about"> {this.props.hotels.hotel_about}</p> 
                                        <p>{this.props.hotels.hotel_terms}</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm="6" >
                            <div className="booking-info">
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
                            </div>
                        </Col>
                    </Row>
                    <div className="hotel-more">

                    </div>
                </div>
            </div>
        );
    }
}

HotelDetails.propTypes = {
    getHotelsByID: PropTypes.func.isRequired,
    getSuiteByHotelID: PropTypes.func.isRequired,
    hotels: PropTypes.any.isRequired,
    suites: PropTypes.array.isRequired,
    myError: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    hotels: state.getHotels.hotels,
    suites: state.getHotels.suites,
    myError: state.getHotels.merror
});

export default connect(mapStateToProps,{getHotelsByID,getSuiteByHotelID})(HotelDetails);