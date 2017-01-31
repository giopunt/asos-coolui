import React from 'react';
import HomeCategories from './components/HomeCategories';
import './CategoriesList.css';

class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: { navigation: { start:true } },
      error: ''
    };

    fetch('http://fashionapi.asos.com/navigation/v1?channel=mobile-web&store=1&lang=en-GB&depth=3')
    .then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({categories: json.navigation})
    }).catch((ex) => {
      this.setState({error: ex})
    })
  }

  selectHome(){
    var gender = this.props.app_state.gender === 1000 ? 0 : 1;
    var categories = {};

    if(!this.state.categories.navigation.start){
      categories = this.state.categories.navigation[gender];
    }

    console.log(categories);
    return categories;
  }

  render() {
    var Home = this.selectHome();
    return(
      <div className="CategoriesList">
        <HomeCategories navigation={Home.navigation}/>
      </div>
    );
  }
}

export default CategoriesList;