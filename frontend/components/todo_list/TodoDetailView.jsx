import React from 'react';
import StepListContainer from '../step_list/StepListContainer';

const TodoDetailView = ({ todo, removeTodo }) => {
  
  return (
    <div>
      {todo.body}
      <StepListContainer todoId={todo.id}/>
      <button onClick={(e) => removeTodo(todo, e)}>Delete</button>
    </div>
  );
};

export default TodoDetailView;