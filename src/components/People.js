import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { Row, Input, Button } from 'react-materialize'


export  class People extends Component {
    render() {
        return (
            <div className="bodyheight">
                <h4 className="test">Search people</h4>
                <Row>
                    <Input s={4} label="Enter actors name" value={""} onChange={""} />
                </Row>
                <Button><Link to='/'>Back</Link></Button>
                <Button onClick={""}>Search</Button>
            </div>
        );
    }
}
