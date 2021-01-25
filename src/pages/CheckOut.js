import React, { Component } from 'react';
import HNAVBAR from '../components/HNavbar';
import FOOTER from '../components/Footer';
import '../styles/CheckOut.css';
import {connect} from 'react-redux';
import {Form, Row, Col, Button} from 'react-bootstrap';
import {postBooking} from '../state_management/actions/booking';
import PropTypes from 'prop-types';
import moment from 'moment/moment.js';
import { FaSpinner } from 'react-icons/fa';
// import { PaystackButton } from "react-paystack"

class CheckOut extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookingName:"",
            bookingPhone:"",
            adultNo:"",
            room:0,
            bookedDate:moment().format("YYYY-mm-DD"),
            suite:"",
            suiteAmt:0,
            bookingEmail:"",
            bookingReference: "HT" + this.newRandomNumber(),
            bookingStatus: "Pending",
            bookingStartDate: "",
            bookingEndDate: "",
            createdAt: moment().format("YYYY-mm-DD"),
            totalAmount: 0,
            hotelId:"",
            status: true
            
        };
      }

    handleInputChange = e => 
      this.setState(
          {
             [e.target.name]: e.target.value   
          }
      );
    
    newRandomNumber(){
        var result = ''
        for (var i = 0; i <= 9; i++) {
            result += Math.floor(Math.random() * (9 - 0 + 1)) + 0; 
        }
        return result;
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({status: false});
        this.props.postBooking(this.state).then = () =>{
            this.setState({status: true});
        }
       
    }

    componentDidMount(){
        try{
            var urlParameters = new URLSearchParams(this.props.location.search);
            var suite_detail = urlParameters.get('suite').split(" - ");
            this.setState({adultNo: urlParameters.get('adultNo')});
            this.setState({room: urlParameters.get('room')});
            this.setState({bookingStartDate: urlParameters.get('startDate')});
            this.setState({bookingEndDate: urlParameters.get('endDate')});
            this.setState({hotelId: urlParameters.get('hotelId')});
            this.setState({suite: suite_detail[0] });
            this.setState({suiteAmt: suite_detail[1] });
            this.setState({totalAmount: suite_detail[1] * urlParameters.get('room')});
        }catch{
               console.log('No booking record found');
        }
        
    }

    render() {
        return (


            <div>
                <HNAVBAR/>
                <div >
                        <Form onSubmit={this.submitForm}>
                            <Row className="checkout">
                                <Col sm="6">
                                    <div className="cart">
                                        <Form.Group as={Row} >
                                            <Form.Label sm="4" className="label">Reference :</Form.Label>
                                            <Col sm="8">
                                            <Form.Control plaintext placeholder="Suite Reference" className="label" 
                                                    name="NBookinRef" value={this.state.bookingReference} readOnly disabled/>
                                            </Col>
                                        </Form.Group>
                                        <Form.Control plaintext placeholder="Booking Name" 
                                        className="details-pram" name="bookingName" required value={this.state.bookingName}
                                        onChange={this.handleInputChange}/>
                                        <Form.Control plaintext placeholder="23470XXXXXXXX or 070XXXXXXXX" type="tel" pattern="[0-9]{11,13}"
                                        className="details-pram" name="bookingPhone" required value={this.state.bookingPhone}
                                        onChange={this.handleInputChange}/>
                                        <Form.Control type="email" placeholder="info@hoteltoday.com.ng" 
                                        className="details-pram" name="bookingEmail" required value={this.state.bookingEmail}
                                        onChange={this.handleInputChange}/>
                                        <Button variant="success" className="Checkbtn" type="submit">Check Out <span hidden={this.state.status} id="status"><FaSpinner icon="spinner" className="spinner" /></span></Button>
                                    </div>
                                </Col>
                                <Col sm="6"> 
                                <   div className="payment">
                                        <Form.Group as={Row} >
                                            <Form.Label sm="4" className="label">Suite Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</Form.Label>
                                            <Col sm="8">
                                            <Form.Control plaintext className="label" 
                                                name="NSuite" value={this.state.suite} readOnly disabled/>
                                            </Col>
                                        </Form.Group>

                                        <Form.Control hidden={true} className="label" 
                                                name="hotelId" value={this.state.hotelId} readOnly disabled/>

                                        <Form.Group as={Row} >
                                            <Form.Label sm="4" className="label">Number of Room(s) &nbsp;&nbsp;&nbsp;:</Form.Label>
                                            <Col sm="8">
                                            <Form.Control plaintext className="label" 
                                                name="NRoom" value={this.state.room} readOnly disabled/>
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} >
                                            <Form.Label sm="4" className="label">Rate Amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</Form.Label>
                                            <Col sm="8">
                                            <Form.Control plaintext className="label" 
                                                name="NSuiteAmt" value={this.state.suiteAmt} readOnly disabled/>
                                            </Col>
                                        </Form.Group>
                                        
                                        <Form.Group as={Row} >
                                            <Form.Label sm="4" className="label">Start Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Form.Label>
                                            <Col sm="8">
                                            <Form.Control plaintext className="label" 
                                                name="NbookedDate" value={this.state.bookingStartDate} readOnly disabled/>
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} >
                                            <Form.Label sm="4" className="label">End Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Form.Label>
                                            <Col sm="8">
                                            <Form.Control plaintext className="label" 
                                                name="NbookedDate" value={this.state.bookingEndDate} readOnly disabled/>
                                            </Col>
                                        </Form.Group>
                                        
                                        <Form.Group as={Row} >
                                            <Form.Label sm="4" className="label">Number of Adult(s) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Form.Label>
                                            <Col sm="8">
                                            <Form.Control plaintext className="label" 
                                                name="NAdultNo" value={this.state.adultNo} readOnly disabled/>
                                            </Col>
                                        </Form.Group>
                                       
                                        <Form.Group as={Row} style={{fontWeight:"bold"}} >
                                            <Form.Label sm="4" className="label">Total Amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</Form.Label>
                                            <Col sm="8">
                                            <Form.Control plaintext className="label" style={{fontWeight:"bold"}}
                                                name="NSuiteAmt" value={"NGN " + this.state.suiteAmt * this.state.room} readOnly disabled/>
                                            </Col>
                                        </Form.Group>
                                        
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                </div>
                <FOOTER/>
            </div>
        );
    }
}

CheckOut.propTypes = {
    postBooking: PropTypes.func.isRequired
}


export default connect(null,{postBooking})(CheckOut);