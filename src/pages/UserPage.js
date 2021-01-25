import React, { Component } from 'react';
import HNAVBAR from '../components/HNavbar';
import CHANGEPASS from '../components/ChangePassword';
import {Row, Col} from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom';
class UserPage extends Component {
    render() {
        return (
            <div>
                <HNAVBAR/>
                <div style={{marginTop:"100px"}}>
                    <Row>
                        <Col md="3" style={{backgroundColor:"green"}}>1</Col>
                        <Col md="9" style={{backgroundColor:"red"}}>
                            <Switch>
                                <Route path="/dashboard" component={CHANGEPASS} exact />
                            </Switch>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default UserPage;