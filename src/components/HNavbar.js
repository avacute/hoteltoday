import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../styles/Navbar.css';
// import Logo from '../images/logo.png';

class HNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect  expand="lg" variant="dark" className="Navbar" fixed="top" >
                    <Navbar.Brand href="/sandbox">HotelToday</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                        <Nav className='ml-auto'>
                            <Nav.Link>NGN</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link href="/sandbox/create-account">Create Account</Nav.Link>
                            {/* <Nav.Link href="/sandbox/signin">Sign in</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default HNavbar;