import React from 'react';
import Nav from './header/Nav';
import Logo from './header/Logo';
import {Container, Row, Col} from 'react-bootstrap';

export default class Header extends React.Component {

    render(){
        return(
            <div className="header">
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Logo />
                        </Col>
                        <Col className="title">
                            <h1> The dawn</h1>
                        </Col>
                        <Col xs={6} md={4}>
                        </Col>
                    </Row>
                </Container>              
                <Nav />
            </div>
        );
    }
}
