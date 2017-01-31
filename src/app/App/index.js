import React from 'react';
import Nav from './components/Nav';
import SplashPage from './components/SplashPage';
import LocalStorageMixin from 'react-localstorage';
import links from './data/';
import './App.css';

const App = React.createClass({
  mixins: [LocalStorageMixin],
  loadFeed: function(){
    fetch('http://www.asos.com/mobile/asos/?sc_lang=en-GB')
    .then((response) => {
      return response.json()
    }).then((json) => {
      var gender = this.state.gender === 1001 ? "men" : "women";
      this.setState({homepage: json.asos.homepage[gender]});
    }).catch((ex) => {
      this.setState({error: ex})
    })
  },
  getInitialState: function() {
    this.loadFeed();
    return { gender: 0, homepage: {} };
  },
  selectGender: function(gender) {
    this.loadFeed();
    this.setState({ gender: gender });
  },
  render() {

    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       app_state: this.state,
       selectGender: this.selectGender
     })
    );

    return (
      <div className="App">
        {childrenWithProps}
        <SplashPage onClick={this.selectGender} gender={this.state.gender}/>
        <Nav data={links}/>
      </div>
    );
  }
});

export default App;
