import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store;
  let apple = 'apple';
  window.apple = apple;

  ReactDOM.render(
    <h1>a new thing</h1>,
    document.getElementById('content')
  );
});