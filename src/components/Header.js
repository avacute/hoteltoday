import React, { Component } from 'react';
import HNAVBAR from './HNavbar'
import '../styles/Header.css';

class Headers extends Component {
    render() {
        return (
            <div>
                <HNAVBAR/>
                <div className="banner">
                    <div className="overlay">
                        <div className="adtext"> 
                            <h2>Hotel Today::. Best place to be</h2>
                            <span>We are here to guide you to comfort</span>
                        </div>
                    </div>           
                </div>
        </div>
        );
    }
}

export default Headers;