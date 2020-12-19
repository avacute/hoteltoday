import React, { Component } from 'react';
import '../styles/Search.css';
import {Form, Button, Row, Col} from 'react-bootstrap';
import JCB from '../images/jcb.jpg';
import MAXIMUS from '../images/maximus.jpg';
import PURPLE from '../images/purple.jpg';
import OURHOME from '../images/ourHome.jpg';
import DANICHE from '../images/deniche.png';
import { DateRangePicker} from 'rsuite';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getHotels} from '../state_management/actions/hotels';

class Search extends Component {

    componentDidMount(){
        this.props.getHotels();
    }
    render() {
        
        const searchError = <div>{this.props.myError}</div>;
        const hotelsh = this.props.hotels.slice(0,4).map(hotel =>(
                    <div key={hotel.id}>{hotel.hotel_name}</div> 
            ));
    
        const style = {borderRadius: "4px", border: "solid 1px", borderColor: "#cdcfce", padding: "3px 5px", boxSizing: "border-box", margin: "8px 0", width:480 };
        return (
            <div>
                <div className='search'>
                    {hotelsh}
                   
                    <div className="content">
                        <p>From cozy country homes to funky city apartments</p>
                        <Form>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Col sm="4">
                                    <Form.Control plaintext placeholder="Where are you going ?" className="search-pram"/>
                                </Col>
                                <Col sm="6">
                                        <DateRangePicker    
                                            appearance="subtle"
                                            size="lg"    
                                            showOneCalendar 
                                            style = {style} 
                                        />
                                </Col>
                                <Col sm="2"> 
                                    
                                {searchError}
                                    <Button variant="success" type="submit" className="search-btn">Search</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                </div>

                <div className="hotels">
                    <Row>
                        <Col sm="4">
                            <a href="/sandbox/hotel-details">
                                <img src={JCB} alt="jcb hotel" width="100%" height="100%"/>
                                <div className="bookingNow">
                                    <p>AVASyn Hotel ::. Book Now </p>
                                    <span>Ipaja, Lagos</span>
                                
                                </div>
                            </a>
                        </Col>
                        <Col sm="4">
                            <a href="/sandbox/hotel-details">
                                <img src={OURHOME} alt="jcb hotel" width="100%" height="100%"/>
                                <div className="bookingNow">
                                    <p>AVASyn Hotel ::. Book Now </p>
                                    <span>Ondo, Ondo</span>
                                </div>
                            </a>
                        </Col>
                        <Col sm="4">
                            <a href="/sandbox/hotel-details">
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
                            <a href="/sandbox/hotel-details">
                                <img src={PURPLE} alt="jcb hotel" width="100%" height="100%"/>
                                <div className="bookingNow">
                                    <p>AVASyn Hotel ::. Book Now </p>
                                    <span>Yaba, Lagos</span>
                                </div>
                            </a>
                        </Col>
                        <Col sm="4">
                            <a href="/sandbox/hotel-details">
                                <img src={MAXIMUS} alt="jcb hotel" width="100%" height="100%"/>
                                <div className="bookingNow">
                                    <p>AVASyn Hotel</p>
                                    <span>Kubba, Abuja</span>
                                </div>
                            </a>
                        </Col>
                        <Col sm="4">
                            <a href="/sandbox/hotel-details">
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

Search.propTypes = {
    getHotels: PropTypes.func.isRequired,
    hotels: PropTypes.array.isRequired,
    myError: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    hotels: state.getHotels.hotels,
    myError: state.getHotels.merror
});

export default connect(mapStateToProps, {getHotels})(Search);