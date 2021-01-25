import React, { Component } from 'react';
import '../styles/HotelDetails.css';
import {Form, Row, Col, Button} from 'react-bootstrap';
import { DateRangePicker} from 'rsuite';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getHotelsByID,getSuiteByHotelID} from '../state_management/actions/hotels';

class HotelDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
          values: {
            room: "",
            suite:"Pick Suite",
            adultNo:""
          },
          startDate: "",
          endDate: ""
        };
      }

      convertDate = (d) =>{
          var newDate =  d.getFullYear() + '-' + d.getMonth()+1 + '-' + d.getDate() ;
          return newDate;
      }

      handleSelect = (range) => {
        
        this.setState(
            {
                startDate: this.convertDate(range[0]),
                endDate: this.convertDate(range[1])
            } 
           
        )
        
      };

      handleInputChange = e => 
        this.setState(
            {
              values: { ...this.state.values, [e.target.name]: e.target.value }  
            }
        );

    componentDidMount(){
        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);
        this.props.getHotelsByID(id);
        this.props.getSuiteByHotelID(id);
    }
   
    render() {
        const searchError = <div>{this.props.myError}</div>;

        const suite = this.props.suites.map(suite =>(
            <option key={suite.id} value={suite.hotel_suite + ' - ' + suite.hotel_price}>{suite.hotel_suite + ' - ' + suite.hotel_price}</option>
        ));

        const suiteImages = this.props.suites.sort(() => Math.random() - Math.random()).slice(0, 3).map(suite =>(
            <Col sm="4" className="hotel_image" key={suite.id}>
                <img src={require(`../images/${suite.suite_image}`)} alt={suite.suite_image} width="100%" height="100%"/>
                <div className='bookingNow'>
                    <p>{suite.hotel_suite.toUpperCase()} ::. Book Now </p>  
                </div>
            </Col>
        ));
    
        

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
                                        {/* <p>{this.props.hotels.hotel_terms}</p> */}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm="6" >
                            <div className="booking-info">
                            <p><b>Book rooms in {this.props.hotels.hotel_name} online</b></p>
                                <Form>
                                    <Form.Group  controlId="formPlaintextEmail" >
                                        <Row>
                                            <Col sm="6">
                                                <DateRangePicker    
                                                    appearance="subtle"
                                                    size="lg"    
                                                    showOneCalendar 
                                                    style = {style}
                                                    selected={this.state.bookedDate}
                                                    onChange={this.handleSelect}
                                                />
                                            </Col>
                                            <Col sm="3">
                                                <Form.Control plaintext placeholder="Adult" className="hotel-details-pram" name="adultNo"
                                                value={this.state.values.adultNo}
                                                onChange={this.handleInputChange}
                                                />
                                            </Col>
                        
                                            <Col sm="3">
                                                <Form.Control plaintext placeholder="Rooms" className="hotel-details-pram" name="room"
                                                value={this.state.values.room}
                                                onChange={this.handleInputChange}
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col sm="6">
                                                <select className="hotel-details-pram" name="suite"
                                                value={this.state.values.suite}
                                                onChange={this.handleInputChange}>
                                                    <option value="Pick suite" selected="selected">Pick suite</option>
                                                   {suite}
                                                </select>
                                            </Col>
                                            <Col sm="6"> 
                                               <a href= {"/checkout?"
                                                +"hotelId=" + this.props.hotels.id
                                                + "&adultNo=" + this.state.values.adultNo
                                                + "&room=" + this.state.values.room 
                                                + "&startDate=" + this.state.startDate
                                                + "&endDate=" + this.state.endDate 
                                                + "&suite=" + this.state.values.suite } > 
                                                <Button variant="success" className="hotel-details-btn">Book</Button> </a>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <div className="hotel-more">
                        <Row>
                        {suiteImages}
                        </Row>
                        
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