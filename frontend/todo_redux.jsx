import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store; // be sure to remove this later

  ReactDOM.render(
    <h1>a new thing</h1>,
    document.getElementById('content')
  );
});