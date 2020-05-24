import React from 'react';
import Header from '../Header';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';
import ModalNew from './ModalNew';
import Alert from 'react-bootstrap/Alert';

export default class Contact extends React.Component {

    constructor(props){
        super(props);
        this.state = ({
            surname:'',
            namE: '',
            phone:'',
            email:'',
            msj:'',
            showComponent:false,
        });
    }
    

    change = e => {
         this.setState({
            [e.target.name]: e.target.value
        })      
    }

    active() {
        console.log('active',this.state)
        if( this.state.surname !== '' && this.state.name !== '' && this.state.phone !== '' && this.state.email !== '' && this.state.msj !== '') {
            this.setState({ showComponent: true, })   
        }
    }

    submit = e => {
        e.preventDefault();
    }

    render(){
        return(
            <div className="contact">
                <Header /> 
                <Card>
                    <Card.Header> <h6> Contact information </h6></Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.submit}>
                        {this.state.showComponent ? 
                                <ModalNew /> : 
                            <>
                            <Alert  variant="danger">
                                You must complete all the fields.
                            </Alert>
                            <Form.Group as={Row} controlId="formHorizontalSurname">
                                <Form.Label column sm={2}>
                                    Surname:
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control value={this.state.surname} name="surname" onChange={this.change} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalName">
                                <Form.Label column sm={2}>
                                    Name:
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control  name="namE" value={this.state.namE} onChange={this.change} />
                                </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row} controlId="formHorizontalPhone">
                                <Form.Label column sm={2}>
                                    Phone:
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control name="phone" value={this.state.phone} onChange={this.change} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Email:
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control name="email" value={this.state.email} onChange={this.change} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalMsj">
                                <Form.Label column sm={2}>
                                    Message:
                                </Form.Label>
                                <Col sm={10}>
                                <textarea name="msj" rows="5" cols="44" value={this.state.msj} onChange={this.change}></textarea>  
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