import React, { Component } from 'react';
import HEADER from '../components/Header';
import BOOKING from '../components/Search';
import FOOTER from '../components/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <HEADER/>
                <BOOKING/>
                <FOOTER/>
            </div>
        );
    }
}

export default Home;