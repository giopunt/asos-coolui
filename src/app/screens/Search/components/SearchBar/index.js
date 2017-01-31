import React from 'react';
import './SearchBar.css';
import Glass from './glass.svg';

const SearchBar = React.createClass({
  getInitialState: function() {
    return { term: '' }
  },
  handleChange: function(event) {
    this.setState({ term: event.target.value })
  },
  render() {
    var term = this.state.term;
    return(
      <div className="SearchBar">
        <input type="text" id="SearchBar-input" value={term} onChange={this.handleChange}/>
        <span className="placeholder" style={ { display: term.length !== 0 ? 'none' : 'block' } }><img src={Glass} alt="" title="Seach here"/>Search</span>
      </div>
    );
  }
});

export default SearchBar;