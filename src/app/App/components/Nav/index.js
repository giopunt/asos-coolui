import React, { Component } from 'react';
import Tab from './components/Tab';
import './Nav.css';

class Nav extends Component {
  render() {
    const navLinks = this.props.data.map((link) =>
        <Tab key={link.alt} src={link.src} alt={link.alt} href={link.href}/>
    );

    return (
        <div className="Nav">
            <ul>{navLinks}</ul>
        </div>
    );
  }
}

export default Nav;