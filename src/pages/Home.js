import React, { Component } from 'react';
import Headers from '../components/Header';
import Booking from '../components/Booking';

class Home extends Component {
    render() {
        return (
            <div>
                <Headers/>
                <Booking/>
            </div>
        );
    }
}

export default Home;