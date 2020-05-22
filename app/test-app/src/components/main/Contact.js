import React from 'react';
import Header from '../Header';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';
import ModalNew from './ModalNew';

export default class Contact extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showComponent:false,
        };
    }
    active() {
        this.setState({
            showComponent: true,
        });
    }
    render(){
        return(
            <div className="contact">
                <Header /> 
                <Card>
                    <Card.Header> <h6> Contact information </h6></Card.Header>
                    <Card.Body>
                        <Form>
                        {this.state.showComponent ? 
                                <ModalNew /> : 
                            <>
                            <Form.Group as={Row} controlId="formHorizontalSurname">
                                <Form.Label column sm={2}>
                                    Surname:
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="surname" required />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalName">
                                <Form.Label column sm={2}>
                                    Name:
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="name" required />
                                </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row} controlId="formHorizontalPhone">
                                <Form.Label column sm={2}>
                                    Phone:
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="phone"required />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Email:
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="email" required />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Message:
                                </Form.Label>
                                <Col sm={10}>
                                <textarea name="msj" rows="5" cols="44" required ></textarea>  
                                </Col>
                            </Form.Group>
                            
                            <Button className="btt" variant="outline-lightblue" onClick={this.active.bind(this)}>
                                Send
                            </Button>
                            </>
                            }
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}