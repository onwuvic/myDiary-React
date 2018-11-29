import React from 'react';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import setAuthToken from './util/AuthToken';
import { asyncActions } from './util/AsyncUtil';
import { LOG_IN } from './actionTypes';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(createLogger(), thunk)));

if (localStorage.token) {
  // setting token to request headers for authentication
  setAuthToken(localStorage.token);
  // adding user object to User's store
  store.dispatch(asyncActions(LOG_IN).success(jwtDecode(localStorage.token)));
}

const Root = props => (
    <Provider store={store}>
      {props.children}
    </Provider>
);

Root.propTypes = {
  children: PropTypes.node
};

export default Root;
