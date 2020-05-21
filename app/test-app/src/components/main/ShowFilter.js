import React from 'react';

export default class ShowFilter extends React.Component {

    render(){
        return(
            <div className="showFilter">
                <li> {this.props.filter}</li>
            </div>
        );
    }
}