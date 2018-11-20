import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(createLogger(), thunk)));

const Index = () => (
    <BrowserRouter>
        <Provider store={store}>
            <div>
                <App />
            </div>
        </Provider>
    </BrowserRouter>
);

render(<Index />, document.getElementById('root'));
