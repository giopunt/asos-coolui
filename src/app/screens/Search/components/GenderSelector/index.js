import React from 'react';
import './GenderSelector.css';

class GenderSelector extends React.Component {
  render() {
    return(
      <div className="GenderSelector">
        <ul>
          <li className={this.props.app_state.gender === 1000 && 'active'} onClick={this.props.onClick.bind(null, 1000)}>Women</li>
          <li className={this.props.app_state.gender === 1001 && 'active'} onClick={this.props.onClick.bind(null, 1001)}>Men</li>
        </ul>
      </div>
    );
  }
}

export default GenderSelector;