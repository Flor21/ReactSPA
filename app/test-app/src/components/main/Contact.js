import React from 'react';
import Header from '../Header';
import Card from 'react-bootstrap/Card';

export default class Contact extends React.Component {

    render(){
        return(
            <div className="contact">
                <Header /> 
                <Card>
                    <Card.Header>Contact information</Card.Header>
                    <Card.Body>
                        <Card.Title>Tel: 555-891</Card.Title>
                        <Card.Text>
                            Place: P. Sherman, calle Wallaby, 42, Sydney
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}