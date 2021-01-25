import React, { Component } from 'react';
import '../styles/Search.css';
import {Row, Col} from 'react-bootstrap';
// import { DateRangePicker} from 'rsuite';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getHotels} from '../state_management/actions/hotels';
import SMALL_LID_1 from '../images/small_lid_1.jpg';
import SMALL_LID_2 from '../images/small_lid_2.jpg';

class Search extends Component {

    componentDidMount(){
        this.props.getHotels();
    }
    render() {
        const searchError = <div>{this.props.myError}</div>;
        const hotels = this.props.hotels.sort(() => Math.random() - Math.random()).slice(0, 6).map(hotel =>(
            <Col sm="4" className="hotel_image" key={hotel.id}>
                <a href={'/sandbox/hotel-details/' + hotel.id}>
                    <img src={require(`../images/${hotel.hotel_image}`)} alt={hotel.hotel_name} width="100%" height="100%"/>
                    <div className='bookingNow'>
                        <p>{hotel.hotel_name.toUpperCase()} ::. Book Now </p>
                        <span>{hotel.hotel_lga}, {hotel.hotel_state} </span>
                    </div>
                </a>
            </Col>
        ));
    
        // const style = {borderRadius: "4px", border: "solid 1px", borderColor: "#cdcfce", padding: "3px 5px", boxSizing: "border-box", margin: "8px 0", width:480 };
        return (
            <div>
                <div className='search'>
                    <div className="content">
                        {/* <p>From cozy country homes to funky city apartments</p> */}
                        <div className='serror'>{searchError}</div>
                        <Row>
                            <Col sm="6">
                                <img src={SMALL_LID_1} alt="lids" className="lid"/>
                            </Col>
                            <Col sm="6">
                                <img src={SMALL_LID_2} alt="lids" className="lid"/>
                            </Col>
                        </Row>
                        {/* <Form>
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
                                    
                                    <Button variant="success" type="submit" className="search-btn">Search</Button>
                                </Col>
                            </Form.Group>
                        </Form> */}
                    </div>
                </div>

                <div className="hotels">
                    <Row>
                        {hotels}
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