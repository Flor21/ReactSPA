import React from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component {

    render(){
        return(
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/flowers">Flowers</Link>
                <Link to="/contact">Contact</Link>
            </div>
        );
    }
}