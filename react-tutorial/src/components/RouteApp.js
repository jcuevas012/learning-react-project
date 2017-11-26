import React, {Component} from 'react';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  browserHistory
} from 'react-router'

import About from './About';
import DevTodo from './DevTodo';
import PostComponent from './PostComponent';

class RouteApp extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={DevTodo}/>
        <Route path="about" component={About}/>
        <Route path="/posts" component={PostComponent}/>
      </Router>
    );

  }

}

export default RouteApp;
