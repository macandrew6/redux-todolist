import React from 'react';
import TodoListItem from './TodoListItem';
import TodoListForm from './TodoListForm';

export default (props) => {
  console.log(props.todos);
  return (
    <div>
      <ul>
        {props.todos.map((todo, key) =>(
          <TodoListItem key={key} todo={todo} />
        ))}
      </ul>
      <TodoListForm receiveTodo={props.receiveTodo}/>
    </div>
  );
};