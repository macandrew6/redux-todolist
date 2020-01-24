import React from 'react';
import TodoListItem from './TodoListItem';
import TodoListForm from './TodoListForm';

const TodoList = (props) => {
  return (
    <div>
      <ul className="todo-list">
        {props.todos.map((todo) =>(
          <TodoListItem 
            key={todo.id}
            todo={todo} 
            receiveTodo={props.receiveTodo}/>
        ))}
      </ul>
      <TodoListForm receiveTodo={props.receiveTodo}/>
    </div>
  );
};

export default TodoList;