import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/style.css';
import PrivateRoute from './PrivateRoute';
import LoginPage from './components/containers/Login/Login';
import SignUpPage from './components/containers/SignUp/SignUp';
import Dashboard from './components/containers/Dashboard/Dashboard';

const NoFound = () => <h1 style={{ marginTop: '50px' }} className="text-center">No Page Found</h1>;
/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof App
   */
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={LoginPage} />
          <Route path='/signup' exact component={SignUpPage} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <Route component={NoFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
