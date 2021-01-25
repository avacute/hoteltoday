import React, { Component } from 'react';
import HNAVBAR from '../components/HNavbar';
import FOOTER from '../components/Footer';
import {Row, Col} from 'react-bootstrap';
import '../styles/CheckOut.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getHotelsByID} from '../state_management/actions/hotels';
import { PaystackButton } from "react-paystack"

class Payment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      paymentStatus: "",
      paymentError: ""
    }
  }

    componentDidMount(){
        this.props.getHotelsByID(localStorage.getItem('hotelID'));
    }
    render() {
        
        const config =  {
                email:localStorage.getItem('email'),
                amount: localStorage.getItem('amount') * 100,
                reference: localStorage.getItem('reference'),
                phone: localStorage.getItem('phone'),
                publicKey: "pk_test_bf42864349d42e97798eb02002315c8bb6cf78f0"
        }
        
        const handlePaystackSuccessAction = () => {
            this.setState({paymentStatus:  localStorage.getItem('reference') + " Payment Successful"});
            this.setState({paymentError: "" });
        };
      
          // you can call this function anything
        const handlePaystackCloseAction = () => {
            this.setState({paymentError: localStorage.getItem('reference') + " Payment Failed" });
            this.setState({paymentStatus:  ""});
          }

        const componentProps = {
            ...config,
            text: "Booking Payment",
            onSuccess: handlePaystackSuccessAction,
            onClose: handlePaystackCloseAction,
        };
        return (
            <div>
                <HNAVBAR/>
                  <div >
                  
                    <Row className="checkout">  

                      <Col className="payment-paystack">
                        <Row>
                          <Col>
                              <div style={{backgroundColor:"lightgreen", marginBottom:"20px"}}>
                                {this.state.paymentStatus}
                              </div>
                              <div style={{backgroundColor:"lightcoral",  marginBottom:"20px"}}>
                                {this.state.paymentError} 
                              </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col sm="4"><b>Booking Details</b></Col>
                          <Col sm="8">{this.props.hotels.hotel_name}</Col>
                        </Row>
                        <Row>
                          <Col sm="4"><b>Booking Details</b></Col>
                          <Col sm="8">{localStorage.getItem('BookingDetail')}</Col>
                        </Row>
                        <Row>
                          <Col sm="4"><b>Transaction Reference</b></Col>
                          <Col sm="8">{localStorage.getItem('reference')}</Col>
                        </Row>
                        <Row>
                          <Col sm="4"><b>Email Address</b></Col>
                          <Col sm="8">{localStorage.getItem('email')}</Col>
                        </Row>

                        <Row>
                          <Col sm="4"><b>Mobile Number</b></Col>
                          <Col sm="8">{localStorage.getItem('phone')}</Col>
                        </Row>

                        <Row>
                          <Col sm="4"><b>Amount</b></Col>
                          <Col sm="8">{localStorage.getItem('amount')}</Col>
                        </Row>

                        <Row>
                          <Col sm="4"></Col>
                          <Col sm="8"><PaystackButton className="Checkbtn" {...componentProps} /> </Col>
                        </Row>
                         
                        
                      </Col>
                            
                    </Row>
                  </div>
                <FOOTER/>
            </div>
        );
    }
}



Payment.propTypes = {
  getHotelsByID: PropTypes.func.isRequired,
  hotels: PropTypes.any.isRequired,
  myError: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  hotels: state.getHotels.hotels,
  myError: state.getHotels.merror
});



export default connect(mapStateToProps,{getHotelsByID})(Payment);