import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Root from './Root';

const Index = () => (
  <Root>
    <BrowserRouter>
      <div>
        <App />
      </div>
    </BrowserRouter>
  </Root>
);

render(<Index />, document.getElementById('root'));
