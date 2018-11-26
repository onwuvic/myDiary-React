import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(createLogger(), thunk)));

const Root = props => (
    <Provider store={store}>
      {props.children}
    </Provider>
);

Root.propTypes = {
  children: PropTypes.node
};

export default Root;
