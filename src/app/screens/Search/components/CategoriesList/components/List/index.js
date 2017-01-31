import React from 'react';

class List extends React.Component {
  render() {
    let links = [];
    if(this.props.navigation){
      links = this.props.navigation.map((link) => 
          <li className={link.type+' link'} key={link.id}>{link.name}</li>
      );
    }
    return(
      <ul>{links}</ul>
    );
  }
}

export default List;