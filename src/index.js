import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import Bag from './app/screens/Bag';
import Home from './app/screens/Home';
import Profile from './app/screens/Profile';
import SavedItems from './app/screens/SavedItems';
import Search from './app/screens/Search';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import './reset.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/women" component={Home} />
      <Route path="/men" component={Home} />
      <Route path="/bag" component={Bag} />
      <Route path="/search" component={Search}>
        <Route path="/search/:gender" component={Search} />
      </Route>
      <Route path="/saveditems" component={SavedItems} />
      <Route path="/profile" component={Profile} />
    </Route>
  </Router>,
  document.getElementById('root')
);
