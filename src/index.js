import React from 'react';
import ReactDOM from 'react-dom';
import { InfoProvider } from './Context';
import App from './App';

ReactDOM.render(
  <InfoProvider>
    {' '}
    <App />{' '}
  </InfoProvider>,
  document.getElementById('root')
);
