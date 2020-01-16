import React from 'react';

export default ({ todo, removeTodo, receiveTodo }) => (
  <div>
    <li>{todo.title}</li>
    <button onClick={() => removeTodo(todo)}>delete</button>
    <button onClick={() => receiveTodo(Object.assign({}, todo, {done: !todo.done}))}>done</button>
  </div>
);