import React from 'react';
import List from '../List';

class HomeCategories extends React.Component {
  render() {
    let descriptors = [];
    if(this.props.navigation){
      descriptors = this.props.navigation.map((descriptor) => 
        <div key={descriptor.name}>
          <h3 className="title">{descriptor.name}</h3>
          <List navigation={descriptor.navigation}/>
        </div>
      );
    }
    return(
      <div>{descriptors}</div>
    );
  }
}

export default HomeCategories;