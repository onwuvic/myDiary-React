import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from './util/isLoginIn';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isLoggedIn()
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
);

export default PrivateRoute;
