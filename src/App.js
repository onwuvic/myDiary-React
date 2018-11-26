import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/style.css';
import Login from './components/containers/Login/Login';
import SignUp from './components/containers/SignUp/SignUp';

const NoFound = () => <h1>No Found</h1>;
/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof CreateArticle
   */
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/signup' exact component={SignUp} />
          <Route component={NoFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
