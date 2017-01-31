import React from 'react';
import { Link } from 'react-router';
import './SplashPage.css';

const SplashPage = React.createClass({
  render() {
    return (
      <div className="SplashPage" style={ { display: this.props.gender !== 0 ? 'none' : 'block'} }>
        <div className="SplashPage-links">
          <Link to="profile" className="link" onClick={this.props.onClick.bind(null, 1000)} data-gender="1000">Sign In</Link>
          <Link to="profile" className="link" onClick={this.props.onClick.bind(null, 1000)} data-gender="1000">Register</Link>
          <Link to="/women" className="link primary" onClick={this.props.onClick.bind(null, 1000)} data-gender="1000">Shop Women</Link>
          <Link to="/men" className="link primary" onClick={this.props.onClick.bind(null, 1001)} data-gender="1001">Shop Men</Link>
        </div>
      </div>
    );
  }
});

export default SplashPage;
