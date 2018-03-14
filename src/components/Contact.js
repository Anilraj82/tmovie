import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { Row, Input, Button } from 'react-materialize'



export  class Contact extends Component {
    render() {
        return (
            <div>
                <h3>Contact details</h3>
                <Row>
                    <Input type="text" label="Last Name" s={6} />
                    <Input type="email" label="Email" s={6} />
                    <Input type="textarea" label="Message" s={6} />
                </Row>
                <Button><Link to='/'>Back</Link></Button>
                <Button onClick={""}>send</Button>
            </div>
        );
    }
}
