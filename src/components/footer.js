import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Row id="wrapper">
                <Col className="container" id="bottom-content">
                    <div className="navbar fixed-bottom navbar-light bg-faded">
                        <p>
                            <small>Created 2017 by Cherie Tabb</small>
                        </p>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Footer;
