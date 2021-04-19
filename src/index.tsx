import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import reportWebVitals from './reportWebVitals';
import 'typography/normalize.css';
import 'typography/fonts.css';
import 'typography/common.css';
import { AppState } from 'store';

ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
  document.getElementById('root')
);

reportWebVitals();
