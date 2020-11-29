import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';
import logo from '../images/logo.png';
import {IconContext} from 'react-icons';
import { 
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
  FaWhatsappSquare 
} from "react-icons/fa";
import 
{ 
   Container,
   Row,
   Col
} from 'react-bootstrap';

   
export default function Footer() {      
  return (
    
    <div className="footer">
        <Container fluid className ="wrapper" id="contactUS">
          <Row className="details">
            <Col sm={4}>
                <img src={logo} alt="" />
            </Col>

            <Col sm={4}>
              <div>
                <h4>QUICK LINKS</h4>
                <ul>
                  <li><a href="#aboutUs">About Us</a></li>
                  <li><a href="#Values">Our Value</a></li>
                  <li><a href="#HowItWorks">How It works</a></li>
                  <li><a href="#Bookings">Booking Request</a></li>
                  <li><a href="#contactUS">Contact Us</a></li>
                  <li><a href="#TC">Terms & Conditions</a></li>
                </ul>
              </div>
            
            </Col>

            <Col sm={4} className="social">
              <h4>GET IN TOUCH</h4>
              <IconContext.Provider value={{ style: {fontSize: '30px', color: '#fff', padding: '5px'}}}>
               <a href='https://web.facebook.com/First-Bond-Logistics-Management-Services-107668360950723/' target='_blank' rel="noopener noreferrer"> <FaFacebookSquare size={50}/> </a>
               <a href='https://wa.me/message/4RHLAFDQGJKJI1' target='_blank' rel="noopener noreferrer"><FaWhatsappSquare size={50}/> </a>
               <a href='https://twitter.com/Firstbond1' target='_blank' rel="noopener noreferrer"><FaTwitterSquare size={50}/></a>
               <a href='https://www.instagram.com/firstbondlogistics/' target='_blank' rel="noopener noreferrer"><FaInstagramSquare size={50}/></a>
               <a href='https://www.youtube.com/channel/UC4MNRn3fSGS_jhq7-37Uggw' target='_blank' rel="noopener noreferrer"><FaYoutubeSquare size={50}/> </a>
              </IconContext.Provider>

              <p>Plot 908, Lateef Jakande Road Agidingbi, Ikeja Lagos, Nigeria</p>
              <p> +2348094811341, +2347044393591, +2347014864270, +2348057821316</p>
                           
            </Col>
 
          </Row>
        </Container>
        
        <Container fluid>
          <Row className="rail-row">
            <Col className="rail">
                &#169; HotelToday | Powered By OpelehNG&#8482;
            </Col>
          </Row>
        </Container>
    </div>
  );
}
