import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { Main } from './app/main';
import AppStateProvider from './app/provider';

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <Main />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);