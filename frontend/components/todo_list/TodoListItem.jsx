import React from 'react';

export default ({ todo, removeTodo, receiveTodo }) => (
  <div>
    <li>{todo.title}</li>
    <button onClick={() => removeTodo(todo)}>Delete</button>
    <button onClick={() => receiveTodo(Object.assign({}, todo, {done: !todo.done}))}>Done</button>
  </div>
);