import React from 'react';
import CategoriesList from './components/CategoriesList';
import GenderSelector from './components/GenderSelector';
import SearchBar from './components/SearchBar';

import './Search.css';

class Search extends React.Component {
  render() {
    return(
      <div className="Search">
        <SearchBar/>
        <GenderSelector onClick={this.props.selectGender} app_state={this.props.app_state}/>
        <CategoriesList app_state={this.props.app_state}/>
      </div>
    );
  }
}

export default Search;