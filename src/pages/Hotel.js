import React, { Component } from 'react';
import NAVBAR from '../components/HNavbar'
import FOOTER from '../components/Footer';
import HOTELDETAILS from '../components/HotelDetails';

class Hotel extends Component {
    render() {
        return (
            <div>
                <NAVBAR/>
                <HOTELDETAILS/>
                <FOOTER/>
            </div>
        );
    }
}

export default Hotel;