import React from 'react';

export default class Flower extends React.Component {

    render(){
        
        return(
            <tbody>
                <tr>
                    <td>{ this.props.flower.name }</td>
                    <td>{ this.props.flower.price }</td>
                    <td>{ this.props.flower.stock }</td>
                </tr>
            </tbody>  
        );
    }
}