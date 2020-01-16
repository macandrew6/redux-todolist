import React from 'react';
import TodoListItem from './TodoListItem';

export default (props) => {
  console.log(props.todos);
  return (
    <ul>
      {props.todos.map((todo, key) =>(
        <TodoListItem key={key} todo={todo} />
      ))}
    </ul>
  );
};