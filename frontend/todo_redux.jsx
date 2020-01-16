import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { allTodos } from './reducers/selectors';

import { 
  receiveTodos, 
  receiveTodo, 
  RECEIVE_TODOS, 
  RECEIVE_TODO } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store; // be sure to remove this later
  window.receiveTodo = RECEIVE_TODO;
  window.anything = 'anything';
  window.receiveTodos = RECEIVE_TODOS;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.apple = "apple";
  window.allTodos = allTodos;

  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('content')
  );
});