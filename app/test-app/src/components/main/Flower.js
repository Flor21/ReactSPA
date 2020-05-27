import React from 'react';
import { Button } from 'react-bootstrap';

export default class Flower extends React.Component {

    render(){
        
        return(
            <tbody>
                <tr>
                    <td>{ this.props.flower.name }</td>
                    <td>{ this.props.flower.price }</td>
                    <td>{ this.props.flower.stock }</td>
                    <td>
                        <Button variant="outline-danger" onClick={this.props.delete.bind(this, this.props.flower.id)}> x </Button>
                    </td>
                </tr>
            </tbody>  
        );
    }
}