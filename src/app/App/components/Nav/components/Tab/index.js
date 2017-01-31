import React, { Component } from 'react';
import { Link } from 'react-router';

class Tab extends Component {
    render() {
        return (
            <li>
                <Link to={this.props.href} activeClassName="active"><img src={this.props.src} alt={this.props.alt}/></Link>
            </li>
        );
    }
}

export default Tab;