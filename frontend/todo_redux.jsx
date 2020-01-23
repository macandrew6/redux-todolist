import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ? 
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);

  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('content')
  );
});